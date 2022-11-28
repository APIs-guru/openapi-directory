package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type SmDevicesForKey struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSmDevicesForKey(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SmDevicesForKey {
	return &SmDevicesForKey{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkPiiSmDevicesForKey - Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
// Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
//
// ## ALTERNATE PATH
//
// ```
// /organizations/{organizationId}/pii/smDevicesForKey
// ```
func (s *SmDevicesForKey) GetNetworkPiiSmDevicesForKey(ctx context.Context, request operations.GetNetworkPiiSmDevicesForKeyRequest) (*operations.GetNetworkPiiSmDevicesForKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/pii/smDevicesForKey", request.PathParams)

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

	res := &operations.GetNetworkPiiSmDevicesForKeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetworkPiiSmDevicesForKey200ApplicationJSONObject = out
		}
	}

	return res, nil
}
