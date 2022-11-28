package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type CustomPerformanceClasses struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomPerformanceClasses(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CustomPerformanceClasses {
	return &CustomPerformanceClasses{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateNetworkApplianceTrafficShapingCustomPerformanceClass - Add a custom performance class for an MX network
// Add a custom performance class for an MX network
func (s *CustomPerformanceClasses) CreateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx context.Context, request operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) (*operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.PathParams)

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

	res := &operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse{
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

			res.CreateNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteNetworkApplianceTrafficShapingCustomPerformanceClass - Delete a custom performance class from an MX network
// Delete a custom performance class from an MX network
func (s *CustomPerformanceClasses) DeleteNetworkApplianceTrafficShapingCustomPerformanceClass(ctx context.Context, request operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest) (*operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.PathParams)

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

	res := &operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetNetworkApplianceTrafficShapingCustomPerformanceClass - Return a custom performance class for an MX network
// Return a custom performance class for an MX network
func (s *CustomPerformanceClasses) GetNetworkApplianceTrafficShapingCustomPerformanceClass(ctx context.Context, request operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest) (*operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.PathParams)

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

	res := &operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse{
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

			res.GetNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkApplianceTrafficShapingCustomPerformanceClasses - List all custom performance classes for an MX network
// List all custom performance classes for an MX network
func (s *CustomPerformanceClasses) GetNetworkApplianceTrafficShapingCustomPerformanceClasses(ctx context.Context, request operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest) (*operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.PathParams)

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

	res := &operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse{
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

			res.GetNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
// Update a custom performance class for an MX network
func (s *CustomPerformanceClasses) UpdateNetworkApplianceTrafficShapingCustomPerformanceClass(ctx context.Context, request operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) (*operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.PathParams)

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

	res := &operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse{
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

			res.UpdateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject = out
		}
	}

	return res, nil
}
