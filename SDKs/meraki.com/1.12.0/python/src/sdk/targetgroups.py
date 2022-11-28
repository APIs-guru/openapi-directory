import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class TargetGroups:
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

    
    def create_network_sm_target_group(self, request: operations.CreateNetworkSmTargetGroupRequest) -> operations.CreateNetworkSmTargetGroupResponse:
        r"""Add a target group
        Add a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_target_group_201_application_json_object = out

        return res

    
    def delete_network_sm_target_group(self, request: operations.DeleteNetworkSmTargetGroupRequest) -> operations.DeleteNetworkSmTargetGroupResponse:
        r"""Delete a target group from a network
        Delete a target group from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_network_sm_target_group(self, request: operations.GetNetworkSmTargetGroupRequest) -> operations.GetNetworkSmTargetGroupResponse:
        r"""Return a target group
        Return a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_group_200_application_json_object = out

        return res

    
    def get_network_sm_target_groups(self, request: operations.GetNetworkSmTargetGroupsRequest) -> operations.GetNetworkSmTargetGroupsResponse:
        r"""List the target groups in this network
        List the target groups in this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmTargetGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_target_groups_200_application_json_object = out

        return res

    
    def update_network_sm_target_group(self, request: operations.UpdateNetworkSmTargetGroupRequest) -> operations.UpdateNetworkSmTargetGroupResponse:
        r"""Update a target group
        Update a target group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/targetGroups/{targetGroupId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSmTargetGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_sm_target_group_200_application_json_object = out

        return res

    