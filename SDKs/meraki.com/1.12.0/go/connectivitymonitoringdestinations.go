package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type ConnectivityMonitoringDestinations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewConnectivityMonitoringDestinations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ConnectivityMonitoringDestinations {
	return &ConnectivityMonitoringDestinations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkApplianceConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MX network
// Return the connectivity testing destinations for an MX network
func (s *ConnectivityMonitoringDestinations) GetNetworkApplianceConnectivityMonitoringDestinations(ctx context.Context, request operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest) (*operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.PathParams)

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

	res := &operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse{
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

			res.GetNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
// Return the connectivity testing destinations for an MG network
func (s *ConnectivityMonitoringDestinations) GetNetworkCellularGatewayConnectivityMonitoringDestinations(ctx context.Context, request operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) (*operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.PathParams)

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

	res := &operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse{
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

			res.GetNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MX network
// Update the connectivity testing destinations for an MX network
func (s *ConnectivityMonitoringDestinations) UpdateNetworkApplianceConnectivityMonitoringDestinations(ctx context.Context, request operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest) (*operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.PathParams)

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

	res := &operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse{
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

			res.UpdateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
// Update the connectivity testing destinations for an MG network
func (s *ConnectivityMonitoringDestinations) UpdateNetworkCellularGatewayConnectivityMonitoringDestinations(ctx context.Context, request operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) (*operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.PathParams)

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

	res := &operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse{
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

			res.UpdateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}
