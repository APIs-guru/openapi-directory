package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type AlternateManagementInterface struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAlternateManagementInterface(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AlternateManagementInterface {
	return &AlternateManagementInterface{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworkSwitchAlternateManagementInterface - Return the switch alternate management interface for the network
// Return the switch alternate management interface for the network
func (s *AlternateManagementInterface) GetNetworkSwitchAlternateManagementInterface(ctx context.Context, request operations.GetNetworkSwitchAlternateManagementInterfaceRequest) (*operations.GetNetworkSwitchAlternateManagementInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/alternateManagementInterface", request.PathParams)

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

	res := &operations.GetNetworkSwitchAlternateManagementInterfaceResponse{
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

			res.GetNetworkSwitchAlternateManagementInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkWirelessAlternateManagementInterface - Return alternate management interface and devices with IP assigned
// Return alternate management interface and devices with IP assigned
func (s *AlternateManagementInterface) GetNetworkWirelessAlternateManagementInterface(ctx context.Context, request operations.GetNetworkWirelessAlternateManagementInterfaceRequest) (*operations.GetNetworkWirelessAlternateManagementInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/alternateManagementInterface", request.PathParams)

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

	res := &operations.GetNetworkWirelessAlternateManagementInterfaceResponse{
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

			res.GetNetworkWirelessAlternateManagementInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkSwitchAlternateManagementInterface - Update the switch alternate management interface for the network
// Update the switch alternate management interface for the network
func (s *AlternateManagementInterface) UpdateNetworkSwitchAlternateManagementInterface(ctx context.Context, request operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest) (*operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/switch/alternateManagementInterface", request.PathParams)

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

	res := &operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse{
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

			res.UpdateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkWirelessAlternateManagementInterface - Update alternate management interface and device static IP
// Update alternate management interface and device static IP
func (s *AlternateManagementInterface) UpdateNetworkWirelessAlternateManagementInterface(ctx context.Context, request operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest) (*operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/wireless/alternateManagementInterface", request.PathParams)

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

	res := &operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse{
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

			res.UpdateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject = out
		}
	}

	return res, nil
}
