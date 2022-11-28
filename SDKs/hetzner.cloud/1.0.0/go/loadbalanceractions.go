package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type LoadBalancerActions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewLoadBalancerActions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *LoadBalancerActions {
	return &LoadBalancerActions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetLoadBalancersIDActions - Get all Actions for a Load Balancer
// Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
func (s *LoadBalancerActions) GetLoadBalancersIDActions(ctx context.Context, request operations.GetLoadBalancersIDActionsRequest) (*operations.GetLoadBalancersIDActionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions", request.PathParams)

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

	res := &operations.GetLoadBalancersIDActionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLoadBalancersIDActionsActionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsResponse = out
		}
	}

	return res, nil
}

// GetLoadBalancersIDActionsActionID - Get an Action for a Load Balancer
// Returns a specific Action for a Load Balancer.
func (s *LoadBalancerActions) GetLoadBalancersIDActionsActionID(ctx context.Context, request operations.GetLoadBalancersIDActionsActionIDRequest) (*operations.GetLoadBalancersIDActionsActionIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/{action_id}", request.PathParams)

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

	res := &operations.GetLoadBalancersIDActionsActionIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetLoadBalancersIDActionsActionIDActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsAddService - Add Service
// Adds a service to a Load Balancer.
//
// #### Call specific error codes
//
// | Code                       | Description                                             |
// |----------------------------|---------------------------------------------------------|
// | `source_port_already_used` | The source port you are trying to add is already in use |
func (s *LoadBalancerActions) PostLoadBalancersIDActionsAddService(ctx context.Context, request operations.PostLoadBalancersIDActionsAddServiceRequest) (*operations.PostLoadBalancersIDActionsAddServiceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/add_service", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsAddServiceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsAddServiceActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsAddTarget - Add Target
// Adds a target to a Load Balancer.
//
// #### Call specific error codes
//
// | Code                                    | Description                                                                                           |
// |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
// | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
// | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
// | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
// | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
// | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
// | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
func (s *LoadBalancerActions) PostLoadBalancersIDActionsAddTarget(ctx context.Context, request operations.PostLoadBalancersIDActionsAddTargetRequest) (*operations.PostLoadBalancersIDActionsAddTargetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/add_target", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsAddTargetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsAddTargetActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsAttachToNetwork - Attach a Load Balancer to a Network
// Attach a Load Balancer to a Network.
//
// **Call specific error codes**
//
// | Code                             | Description                                                           |
// |----------------------------------|-----------------------------------------------------------------------|
// | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
// | `ip_not_available`               | The provided Network IP is not available                              |
// | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
func (s *LoadBalancerActions) PostLoadBalancersIDActionsAttachToNetwork(ctx context.Context, request operations.PostLoadBalancersIDActionsAttachToNetworkRequest) (*operations.PostLoadBalancersIDActionsAttachToNetworkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/attach_to_network", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsAttachToNetworkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsAttachToNetworkActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsChangeAlgorithm - Change Algorithm
// Change the algorithm that determines to which target new requests are sent.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsChangeAlgorithm(ctx context.Context, request operations.PostLoadBalancersIDActionsChangeAlgorithmRequest) (*operations.PostLoadBalancersIDActionsChangeAlgorithmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/change_algorithm", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsChangeAlgorithmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsChangeAlgorithmActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsChangeDNSPtr - Change reverse DNS entry for this Load Balancer
// Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
//
// Floating IPs assigned to the Server are not affected by this.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsChangeDNSPtr(ctx context.Context, request operations.PostLoadBalancersIDActionsChangeDNSPtrRequest) (*operations.PostLoadBalancersIDActionsChangeDNSPtrResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/change_dns_ptr", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsChangeDNSPtrResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsChangeDNSPtrActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsChangeProtection - Change Load Balancer Protection
// Changes the protection configuration of a Load Balancer.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsChangeProtection(ctx context.Context, request operations.PostLoadBalancersIDActionsChangeProtectionRequest) (*operations.PostLoadBalancersIDActionsChangeProtectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/change_protection", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsChangeProtectionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsChangeProtectionActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsChangeType - Change the Type of a Load Balancer
// Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
//
// **Call specific error codes**
//
// | Code                         | Description                                                     |
// |------------------------------|-----------------------------------------------------------------|
// | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
func (s *LoadBalancerActions) PostLoadBalancersIDActionsChangeType(ctx context.Context, request operations.PostLoadBalancersIDActionsChangeTypeRequest) (*operations.PostLoadBalancersIDActionsChangeTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/change_type", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsChangeTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsChangeTypeActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsDeleteService - Delete Service
// Delete a service of a Load Balancer.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsDeleteService(ctx context.Context, request operations.PostLoadBalancersIDActionsDeleteServiceRequest) (*operations.PostLoadBalancersIDActionsDeleteServiceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/delete_service", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsDeleteServiceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsDeleteServiceActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsDetachFromNetwork - Detach a Load Balancer from a Network
// Detaches a Load Balancer from a network.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsDetachFromNetwork(ctx context.Context, request operations.PostLoadBalancersIDActionsDetachFromNetworkRequest) (*operations.PostLoadBalancersIDActionsDetachFromNetworkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/detach_from_network", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsDetachFromNetworkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsDetachFromNetworkActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsDisablePublicInterface - Disable the public interface of a Load Balancer
// Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
//
// #### Call specific error codes
//
// | Code                                      | Description                                                                    |
// |-------------------------------------------|--------------------------------------------------------------------------------|
// | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
// | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
func (s *LoadBalancerActions) PostLoadBalancersIDActionsDisablePublicInterface(ctx context.Context, request operations.PostLoadBalancersIDActionsDisablePublicInterfaceRequest) (*operations.PostLoadBalancersIDActionsDisablePublicInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/disable_public_interface", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostLoadBalancersIDActionsDisablePublicInterfaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsEnablePublicInterface - Enable the public interface of a Load Balancer
// Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsEnablePublicInterface(ctx context.Context, request operations.PostLoadBalancersIDActionsEnablePublicInterfaceRequest) (*operations.PostLoadBalancersIDActionsEnablePublicInterfaceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/enable_public_interface", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.PostLoadBalancersIDActionsEnablePublicInterfaceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsEnablePublicInterfaceActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsRemoveTarget - Remove Target
// Removes a target from a Load Balancer.
func (s *LoadBalancerActions) PostLoadBalancersIDActionsRemoveTarget(ctx context.Context, request operations.PostLoadBalancersIDActionsRemoveTargetRequest) (*operations.PostLoadBalancersIDActionsRemoveTargetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/remove_target", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsRemoveTargetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsRemoveTargetActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}

// PostLoadBalancersIDActionsUpdateService - Update Service
// Updates a Load Balancer Service.
//
// #### Call specific error codes
//
// | Code                       | Description                                             |
// |----------------------------|---------------------------------------------------------|
// | `source_port_already_used` | The source port you are trying to add is already in use |
func (s *LoadBalancerActions) PostLoadBalancersIDActionsUpdateService(ctx context.Context, request operations.PostLoadBalancersIDActionsUpdateServiceRequest) (*operations.PostLoadBalancersIDActionsUpdateServiceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/load_balancers/{id}/actions/update_service", request.PathParams)

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

	res := &operations.PostLoadBalancersIDActionsUpdateServiceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostLoadBalancersIDActionsUpdateServiceActionResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionResponse = out
		}
	}

	return res, nil
}
