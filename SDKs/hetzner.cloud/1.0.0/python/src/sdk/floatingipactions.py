import requests
from typing import Optional
from sdk.models import operations
from . import utils

class FloatingIPActions:
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

    
    def get_floating_ips_id_actions(self, request: operations.GetFloatingIpsIDActionsRequest) -> operations.GetFloatingIpsIDActionsResponse:
        r"""Get all Actions for a Floating IP
        Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIpsIDActions200ApplicationJSON])
                res.get_floating_ips_id_actions_200_application_json_object = out

        return res

    
    def get_floating_ips_id_actions_action_id_(self, request: operations.GetFloatingIpsIDActionsActionIDRequest) -> operations.GetFloatingIpsIDActionsActionIDResponse:
        r"""Get an Action for a Floating IP
        Returns a specific Action object for a Floating IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIpsIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_floating_ips_id_actions_assign(self, request: operations.PostFloatingIpsIDActionsAssignRequest) -> operations.PostFloatingIpsIDActionsAssignResponse:
        r"""Assign a Floating IP to a Server
        Assigns a Floating IP to a Server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/assign", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsAssignResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsAssignActionResponse])
                res.action_response = out

        return res

    
    def post_floating_ips_id_actions_change_dns_ptr(self, request: operations.PostFloatingIpsIDActionsChangeDNSPtrRequest) -> operations.PostFloatingIpsIDActionsChangeDNSPtrResponse:
        r"""Change reverse DNS entry for a Floating IP
        Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/change_dns_ptr", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsChangeDNSPtrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsChangeDNSPtrActionResponse])
                res.action_response = out

        return res

    
    def post_floating_ips_id_actions_change_protection(self, request: operations.PostFloatingIpsIDActionsChangeProtectionRequest) -> operations.PostFloatingIpsIDActionsChangeProtectionResponse:
        r"""Change Floating IP Protection
        Changes the protection configuration of the Floating IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/change_protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    def post_floating_ips_id_actions_unassign(self, request: operations.PostFloatingIpsIDActionsUnassignRequest) -> operations.PostFloatingIpsIDActionsUnassignResponse:
        r"""Unassign a Floating IP
        Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/unassign", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsUnassignResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsUnassignActionResponse])
                res.action_response = out

        return res

    