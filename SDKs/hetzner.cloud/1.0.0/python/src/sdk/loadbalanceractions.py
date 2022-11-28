import requests
from typing import Optional
from sdk.models import operations
from . import utils

class LoadBalancerActions:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_load_balancers_id_actions(self, request: operations.GetLoadBalancersIDActionsRequest) -> operations.GetLoadBalancersIDActionsResponse:
        r"""Get all Actions for a Load Balancer
        Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_load_balancers_id_actions_action_id_(self, request: operations.GetLoadBalancersIDActionsActionIDRequest) -> operations.GetLoadBalancersIDActionsActionIDResponse:
        r"""Get an Action for a Load Balancer
        Returns a specific Action for a Load Balancer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_add_service(self, request: operations.PostLoadBalancersIDActionsAddServiceRequest) -> operations.PostLoadBalancersIDActionsAddServiceResponse:
        r"""Add Service
        Adds a service to a Load Balancer.
        
        #### Call specific error codes
        
        | Code                       | Description                                             |
        |----------------------------|---------------------------------------------------------|
        | `source_port_already_used` | The source port you are trying to add is already in use |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/add_service", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsAddServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsAddServiceActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_add_target(self, request: operations.PostLoadBalancersIDActionsAddTargetRequest) -> operations.PostLoadBalancersIDActionsAddTargetResponse:
        r"""Add Target
        Adds a target to a Load Balancer.
        
        #### Call specific error codes
        
        | Code                                    | Description                                                                                           |
        |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
        | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
        | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
        | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
        | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
        | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
        | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/add_target", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsAddTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsAddTargetActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_attach_to_network(self, request: operations.PostLoadBalancersIDActionsAttachToNetworkRequest) -> operations.PostLoadBalancersIDActionsAttachToNetworkResponse:
        r"""Attach a Load Balancer to a Network
        Attach a Load Balancer to a Network.
        
        **Call specific error codes**
        
        | Code                             | Description                                                           |
        |----------------------------------|-----------------------------------------------------------------------|
        | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
        | `ip_not_available`               | The provided Network IP is not available                              |
        | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/attach_to_network", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsAttachToNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsAttachToNetworkActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_change_algorithm(self, request: operations.PostLoadBalancersIDActionsChangeAlgorithmRequest) -> operations.PostLoadBalancersIDActionsChangeAlgorithmResponse:
        r"""Change Algorithm
        Change the algorithm that determines to which target new requests are sent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_algorithm", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeAlgorithmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeAlgorithmActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_change_dns_ptr(self, request: operations.PostLoadBalancersIDActionsChangeDNSPtrRequest) -> operations.PostLoadBalancersIDActionsChangeDNSPtrResponse:
        r"""Change reverse DNS entry for this Load Balancer
        Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
        
        Floating IPs assigned to the Server are not affected by this.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_dns_ptr", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeDNSPtrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeDNSPtrActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_change_protection(self, request: operations.PostLoadBalancersIDActionsChangeProtectionRequest) -> operations.PostLoadBalancersIDActionsChangeProtectionResponse:
        r"""Change Load Balancer Protection
        Changes the protection configuration of a Load Balancer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_change_type(self, request: operations.PostLoadBalancersIDActionsChangeTypeRequest) -> operations.PostLoadBalancersIDActionsChangeTypeResponse:
        r"""Change the Type of a Load Balancer
        Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
        
        **Call specific error codes**
        
        | Code                         | Description                                                     |
        |------------------------------|-----------------------------------------------------------------|
        | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_type", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeTypeActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_delete_service(self, request: operations.PostLoadBalancersIDActionsDeleteServiceRequest) -> operations.PostLoadBalancersIDActionsDeleteServiceResponse:
        r"""Delete Service
        Delete a service of a Load Balancer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/delete_service", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsDeleteServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsDeleteServiceActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_detach_from_network(self, request: operations.PostLoadBalancersIDActionsDetachFromNetworkRequest) -> operations.PostLoadBalancersIDActionsDetachFromNetworkResponse:
        r"""Detach a Load Balancer from a Network
        Detaches a Load Balancer from a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/detach_from_network", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsDetachFromNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsDetachFromNetworkActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_disable_public_interface(self, request: operations.PostLoadBalancersIDActionsDisablePublicInterfaceRequest) -> operations.PostLoadBalancersIDActionsDisablePublicInterfaceResponse:
        r"""Disable the public interface of a Load Balancer
        Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
        
        #### Call specific error codes
        
        | Code                                      | Description                                                                    |
        |-------------------------------------------|--------------------------------------------------------------------------------|
        | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
        | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/disable_public_interface", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsDisablePublicInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_enable_public_interface(self, request: operations.PostLoadBalancersIDActionsEnablePublicInterfaceRequest) -> operations.PostLoadBalancersIDActionsEnablePublicInterfaceResponse:
        r"""Enable the public interface of a Load Balancer
        Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/enable_public_interface", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsEnablePublicInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsEnablePublicInterfaceActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_remove_target(self, request: operations.PostLoadBalancersIDActionsRemoveTargetRequest) -> operations.PostLoadBalancersIDActionsRemoveTargetResponse:
        r"""Remove Target
        Removes a target from a Load Balancer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/remove_target", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsRemoveTargetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsRemoveTargetActionResponse])
                res.action_response = out

        return res

    
    def post_load_balancers_id_actions_update_service(self, request: operations.PostLoadBalancersIDActionsUpdateServiceRequest) -> operations.PostLoadBalancersIDActionsUpdateServiceResponse:
        r"""Update Service
        Updates a Load Balancer Service.
        
        #### Call specific error codes
        
        | Code                       | Description                                             |
        |----------------------------|---------------------------------------------------------|
        | `source_port_already_used` | The source port you are trying to add is already in use |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/update_service", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsUpdateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsUpdateServiceActionResponse])
                res.action_response = out

        return res

    