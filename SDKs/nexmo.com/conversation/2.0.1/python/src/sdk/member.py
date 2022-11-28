import requests
from typing import Any,List,Optional
from sdk.models import operations
from . import utils

class Member:
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

    
    def create_member(self, request: operations.CreateMemberRequest) -> operations.CreateMemberResponse:
        r"""Create a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/members", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateMember201ApplicationJSON])
                res.create_member_201_application_json_object = out

        return res

    
    def delete_member(self, request: operations.DeleteMemberRequest) -> operations.DeleteMemberResponse:
        r"""Delete a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/members/{member_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_member_200_application_json_object = out

        return res

    
    def get_member(self, request: operations.GetMemberRequest) -> operations.GetMemberResponse:
        r"""Retrieve a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/members/{member_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_member_200_application_json_any = out

        return res

    
    def get_members(self, request: operations.GetMembersRequest) -> operations.GetMembersResponse:
        r"""List members
        This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/members", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetMembers200ApplicationJSON]])
                res.get_members_200_application_json_objects = out

        return res

    
    def update_member(self, request: operations.UpdateMemberRequest) -> operations.UpdateMemberResponse:
        r"""Update a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/members/{member_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_member_200_application_json_any = out

        return res

    