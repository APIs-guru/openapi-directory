package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type NetworkActions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewNetworkActions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *NetworkActions {
	return &NetworkActions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetNetworksIDActions - Get all Actions for a Network
// Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
func (s *NetworkActions) GetNetworksIDActions(ctx context.Context, request operations.GetNetworksIDActionsRequest) (*operations.GetNetworksIDActionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworksIDActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetNetworksIDActionsActionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsResponse = out
		}
	}

	return res, nil
}

// GetNetworksIDActionsActionID - Get an Action for a Network
// Returns a specific Action for a Network.
func (s *NetworkActions) GetNetworksIDActionsActionID(ctx context.Context, request operations.GetNetworksIDActionsActionIDRequest) (*operations.GetNetworksIDActionsActionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/{action_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetNetworksIDActionsActionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetNetworksIDActionsActionIDActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostNetworksIDActionsAddRoute - Add a route to a Network
// Adds a route entry to a Network.
//
// Note: if the Network object changes during the request, the response will be a “conflict” error.
func (s *NetworkActions) PostNetworksIDActionsAddRoute(ctx context.Context, request operations.PostNetworksIDActionsAddRouteRequest) (*operations.PostNetworksIDActionsAddRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/add_route", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostNetworksIDActionsAddRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostNetworksIDActionsAddRouteActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostNetworksIDActionsAddSubnet - Add a subnet to a Network
// Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
//
// Note: if the parent Network object changes during the request, the response will be a “conflict” error.
func (s *NetworkActions) PostNetworksIDActionsAddSubnet(ctx context.Context, request operations.PostNetworksIDActionsAddSubnetRequest) (*operations.PostNetworksIDActionsAddSubnetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/add_subnet", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostNetworksIDActionsAddSubnetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostNetworksIDActionsAddSubnetActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostNetworksIDActionsChangeIPRange - Change IP range of a Network
// Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
//
// For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
//
// After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
//
// Note: if the Network object changes during the request, the response will be a “conflict” error.
func (s *NetworkActions) PostNetworksIDActionsChangeIPRange(ctx context.Context, request operations.PostNetworksIDActionsChangeIPRangeRequest) (*operations.PostNetworksIDActionsChangeIPRangeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/change_ip_range", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostNetworksIDActionsChangeIPRangeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostNetworksIDActionsChangeIPRangeActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostNetworksIDActionsChangeProtection - Change Network Protection
// Changes the protection configuration of a Network.
//
// Note: if the Network object changes during the request, the response will be a “conflict” error.
func (s *NetworkActions) PostNetworksIDActionsChangeProtection(ctx context.Context, request operations.PostNetworksIDActionsChangeProtectionRequest) (*operations.PostNetworksIDActionsChangeProtectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/change_protection", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostNetworksIDActionsChangeProtectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostNetworksIDActionsChangeProtectionActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostNetworksIDActionsDeleteRoute - Delete a route from a Network
// Delete a route entry from a Network.
//
// Note: if the Network object changes during the request, the response will be a “conflict” error.
func (s *NetworkActions) PostNetworksIDActionsDeleteRoute(ctx context.Context, request operations.PostNetworksIDActionsDeleteRouteRequest) (*operations.PostNetworksIDActionsDeleteRouteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/delete_route", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostNetworksIDActionsDeleteRouteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostNetworksIDActionsDeleteRouteActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostNetworksIDActionsDeleteSubnet - Delete a subnet from a Network
// Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
//
// Note: if the Network object changes during the request, the response will be a “conflict” error.
func (s *NetworkActions) PostNetworksIDActionsDeleteSubnet(ctx context.Context, request operations.PostNetworksIDActionsDeleteSubnetRequest) (*operations.PostNetworksIDActionsDeleteSubnetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/networks/{id}/actions/delete_subnet", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostNetworksIDActionsDeleteSubnetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostNetworksIDActionsDeleteSubnetActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}
