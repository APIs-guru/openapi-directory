package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type MonitoredResourceDescriptors struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMonitoredResourceDescriptors(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *MonitoredResourceDescriptors {
	return &MonitoredResourceDescriptors{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// LoggingMonitoredResourceDescriptorsList - Lists the descriptors for monitored resource types used by Logging.
func (s *MonitoredResourceDescriptors) LoggingMonitoredResourceDescriptorsList(ctx context.Context, request operations.LoggingMonitoredResourceDescriptorsListRequest) (*operations.LoggingMonitoredResourceDescriptorsListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/monitoredResourceDescriptors"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LoggingMonitoredResourceDescriptorsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListMonitoredResourceDescriptorsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListMonitoredResourceDescriptorsResponse = out
		}
	}

	return res, nil
}
