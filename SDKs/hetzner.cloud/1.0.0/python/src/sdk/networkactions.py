import requests
from typing import Optional
from sdk.models import operations
from . import utils

class NetworkActions:
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

    
    def get_networks_id_actions(self, request: operations.GetNetworksIDActionsRequest) -> operations.GetNetworksIDActionsResponse:
        r"""Get all Actions for a Network
        Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworksIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_networks_id_actions_action_id_(self, request: operations.GetNetworksIDActionsActionIDRequest) -> operations.GetNetworksIDActionsActionIDResponse:
        r"""Get an Action for a Network
        Returns a specific Action for a Network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworksIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_networks_id_actions_add_route(self, request: operations.PostNetworksIDActionsAddRouteRequest) -> operations.PostNetworksIDActionsAddRouteResponse:
        r"""Add a route to a Network
        Adds a route entry to a Network.
        
        Note: if the Network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/add_route", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsAddRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsAddRouteActionResponse])
                res.action_response = out

        return res

    
    def post_networks_id_actions_add_subnet(self, request: operations.PostNetworksIDActionsAddSubnetRequest) -> operations.PostNetworksIDActionsAddSubnetResponse:
        r"""Add a subnet to a Network
        Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
        
        Note: if the parent Network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/add_subnet", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsAddSubnetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsAddSubnetActionResponse])
                res.action_response = out

        return res

    
    def post_networks_id_actions_change_ip_range(self, request: operations.PostNetworksIDActionsChangeIPRangeRequest) -> operations.PostNetworksIDActionsChangeIPRangeResponse:
        r"""Change IP range of a Network
        Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
        
        For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
        
        After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
        
        Note: if the Network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/change_ip_range", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsChangeIPRangeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsChangeIPRangeActionResponse])
                res.action_response = out

        return res

    
    def post_networks_id_actions_change_protection(self, request: operations.PostNetworksIDActionsChangeProtectionRequest) -> operations.PostNetworksIDActionsChangeProtectionResponse:
        r"""Change Network Protection
        Changes the protection configuration of a Network.
        
        Note: if the Network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/change_protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    def post_networks_id_actions_delete_route(self, request: operations.PostNetworksIDActionsDeleteRouteRequest) -> operations.PostNetworksIDActionsDeleteRouteResponse:
        r"""Delete a route from a Network
        Delete a route entry from a Network.
        
        Note: if the Network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/delete_route", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsDeleteRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsDeleteRouteActionResponse])
                res.action_response = out

        return res

    
    def post_networks_id_actions_delete_subnet(self, request: operations.PostNetworksIDActionsDeleteSubnetRequest) -> operations.PostNetworksIDActionsDeleteSubnetResponse:
        r"""Delete a subnet from a Network
        Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
        
        Note: if the Network object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{id}/actions/delete_subnet", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsDeleteSubnetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsDeleteSubnetActionResponse])
                res.action_response = out

        return res

    