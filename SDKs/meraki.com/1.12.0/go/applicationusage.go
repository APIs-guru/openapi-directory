package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type ApplicationUsage struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewApplicationUsage(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ApplicationUsage {
	return &ApplicationUsage{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkClientsApplicationUsage - Return the application usage data for clients
// Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
func (s *ApplicationUsage) GetNetworkClientsApplicationUsage(ctx context.Context, request operations.GetNetworkClientsApplicationUsageRequest) (*operations.GetNetworkClientsApplicationUsageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/clients/applicationUsage", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworkClientsApplicationUsageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetworkClientsApplicationUsage200ApplicationJSONObject = out
		}
	}

	return res, nil
}
