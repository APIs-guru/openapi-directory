package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Insight struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewInsight(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Insight {
	return &Insight{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateOrganizationInsightMonitoredMediaServer - Add a media server to be monitored for this organization
// Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
func (s *Insight) CreateOrganizationInsightMonitoredMediaServer(ctx context.Context, request operations.CreateOrganizationInsightMonitoredMediaServerRequest) (*operations.CreateOrganizationInsightMonitoredMediaServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateOrganizationInsightMonitoredMediaServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateOrganizationInsightMonitoredMediaServer201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteOrganizationInsightMonitoredMediaServer - Delete a monitored media server from this organization
// Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
func (s *Insight) DeleteOrganizationInsightMonitoredMediaServer(ctx context.Context, request operations.DeleteOrganizationInsightMonitoredMediaServerRequest) (*operations.DeleteOrganizationInsightMonitoredMediaServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteOrganizationInsightMonitoredMediaServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetNetworkInsightApplicationHealthByTime - Get application health by time
// Get application health by time
func (s *Insight) GetNetworkInsightApplicationHealthByTime(ctx context.Context, request operations.GetNetworkInsightApplicationHealthByTimeRequest) (*operations.GetNetworkInsightApplicationHealthByTimeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/insight/applications/{applicationId}/healthByTime", request.PathParams)

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

	res := &operations.GetNetworkInsightApplicationHealthByTimeResponse{
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

			res.GetNetworkInsightApplicationHealthByTime200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationInsightApplications - List all Insight tracked applications
// List all Insight tracked applications
func (s *Insight) GetOrganizationInsightApplications(ctx context.Context, request operations.GetOrganizationInsightApplicationsRequest) (*operations.GetOrganizationInsightApplicationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/insight/applications", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrganizationInsightApplicationsResponse{
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

			res.GetOrganizationInsightApplications200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationInsightMonitoredMediaServer - Return a monitored media server for this organization
// Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
func (s *Insight) GetOrganizationInsightMonitoredMediaServer(ctx context.Context, request operations.GetOrganizationInsightMonitoredMediaServerRequest) (*operations.GetOrganizationInsightMonitoredMediaServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrganizationInsightMonitoredMediaServerResponse{
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

			res.GetOrganizationInsightMonitoredMediaServer200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationInsightMonitoredMediaServers - List the monitored media servers for this organization
// List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
func (s *Insight) GetOrganizationInsightMonitoredMediaServers(ctx context.Context, request operations.GetOrganizationInsightMonitoredMediaServersRequest) (*operations.GetOrganizationInsightMonitoredMediaServersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrganizationInsightMonitoredMediaServersResponse{
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

			res.GetOrganizationInsightMonitoredMediaServers200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateOrganizationInsightMonitoredMediaServer - Update a monitored media server for this organization
// Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
func (s *Insight) UpdateOrganizationInsightMonitoredMediaServer(ctx context.Context, request operations.UpdateOrganizationInsightMonitoredMediaServerRequest) (*operations.UpdateOrganizationInsightMonitoredMediaServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateOrganizationInsightMonitoredMediaServerResponse{
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

			res.UpdateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject = out
		}
	}

	return res, nil
}
