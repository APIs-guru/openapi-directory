import requests
from sdk.models import operations
from . import utils

class Members:
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

    
    def delete_workspace_id_members_id_(self, request: operations.DeleteWorkspaceIDMembersIDRequest) -> operations.DeleteWorkspaceIDMembersIDResponse:
        r"""Delete a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceIDMembersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_workspace_id_members_member_id_identities(self, request: operations.DeleteWorkspaceIDMembersMemberIDIdentitiesRequest) -> operations.DeleteWorkspaceIDMembersMemberIDIdentitiesResponse:
        r"""Remove identity from a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/identities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceIDMembersMemberIDIdentitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def get_workspace_id_members(self, request: operations.GetWorkspaceIDMembersRequest) -> operations.GetWorkspaceIDMembersResponse:
        r"""List members in a workspace
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_workspace_id_members_find(self, request: operations.GetWorkspaceIDMembersFindRequest) -> operations.GetWorkspaceIDMembersFindResponse:
        r"""Find a member by an identity
        Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/find", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDMembersFindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_workspace_id_members_id_(self, request: operations.GetWorkspaceIDMembersIDRequest) -> operations.GetWorkspaceIDMembersIDResponse:
        r"""Get a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDMembersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_workspace_id_members(self, request: operations.PostWorkspaceIDMembersRequest) -> operations.PostWorkspaceIDMembersResponse:
        r"""Create or update a member
        This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspaceIDMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def post_workspace_id_members_member_id_identities(self, request: operations.PostWorkspaceIDMembersMemberIDIdentitiesRequest) -> operations.PostWorkspaceIDMembersMemberIDIdentitiesResponse:
        r"""Add identity to a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/identities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspaceIDMembersMemberIDIdentitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def put_workspace_id_members_id_(self, request: operations.PutWorkspaceIDMembersIDRequest) -> operations.PutWorkspaceIDMembersIDResponse:
        r"""Update a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWorkspaceIDMembersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    