package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Requests struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRequests(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Requests {
	return &Requests{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateNetworkPiiRequest - Submit a new delete or restrict processing PII request
// Submit a new delete or restrict processing PII request
//
// ## ALTERNATE PATH
//
// ```
// /organizations/{organizationId}/pii/requests
// ```
func (s *Requests) CreateNetworkPiiRequest(ctx context.Context, request operations.CreateNetworkPiiRequestRequest) (*operations.CreateNetworkPiiRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/pii/requests", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.CreateNetworkPiiRequestResponse{
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

			res.CreateNetworkPiiRequest201ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteNetworkPiiRequest - Delete a restrict processing PII request
// Delete a restrict processing PII request
//
// ## ALTERNATE PATH
//
// ```
// /organizations/{organizationId}/pii/requests/{requestId}
// ```
func (s *Requests) DeleteNetworkPiiRequest(ctx context.Context, request operations.DeleteNetworkPiiRequestRequest) (*operations.DeleteNetworkPiiRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/pii/requests/{requestId}", request.PathParams)

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

	res := &operations.DeleteNetworkPiiRequestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// GetNetworkPiiRequest - Return a PII request
// Return a PII request
//
// ## ALTERNATE PATH
//
// ```
// /organizations/{organizationId}/pii/requests/{requestId}
// ```
func (s *Requests) GetNetworkPiiRequest(ctx context.Context, request operations.GetNetworkPiiRequestRequest) (*operations.GetNetworkPiiRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/pii/requests/{requestId}", request.PathParams)

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

	res := &operations.GetNetworkPiiRequestResponse{
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

			res.GetNetworkPiiRequest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetNetworkPiiRequests - List the PII requests for this network or organization
// List the PII requests for this network or organization
//
// ## ALTERNATE PATH
//
// ```
// /organizations/{organizationId}/pii/requests
// ```
func (s *Requests) GetNetworkPiiRequests(ctx context.Context, request operations.GetNetworkPiiRequestsRequest) (*operations.GetNetworkPiiRequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/pii/requests", request.PathParams)

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

	res := &operations.GetNetworkPiiRequestsResponse{
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

			res.GetNetworkPiiRequests200ApplicationJSONObject = out
		}
	}

	return res, nil
}
