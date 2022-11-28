import requests
from sdk.models import operations
from . import utils

class Activities:
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

    
    def delete_workspace_id_members_member_id_activities_id_(self, request: operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDRequest) -> operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDResponse:
        r"""Delete a post activity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/activities/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceIDMembersMemberIDActivitiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_workspace_id_activities(self, request: operations.GetWorkspaceIDActivitiesRequest) -> operations.GetWorkspaceIDActivitiesResponse:
        r"""List activities for a workspace
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/activities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_workspace_id_activities_id_(self, request: operations.GetWorkspaceIDActivitiesIDRequest) -> operations.GetWorkspaceIDActivitiesIDResponse:
        r"""Get an activity in the workspace
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/activities/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDActivitiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_workspace_id_members_member_id_activities(self, request: operations.GetWorkspaceIDMembersMemberIDActivitiesRequest) -> operations.GetWorkspaceIDMembersMemberIDActivitiesResponse:
        r"""List activities for a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/activities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDMembersMemberIDActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_workspace_id_activities(self, request: operations.PostWorkspaceIDActivitiesRequest) -> operations.PostWorkspaceIDActivitiesResponse:
        r"""Create a Custom or a Content activity for a new or existing member
        Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/activities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspaceIDActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def post_workspace_id_members_member_id_activities(self, request: operations.PostWorkspaceIDMembersMemberIDActivitiesRequest) -> operations.PostWorkspaceIDMembersMemberIDActivitiesResponse:
        r"""Create a Custom or a Content activity for a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/activities", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspaceIDMembersMemberIDActivitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def put_workspace_id_members_member_id_activities_id_(self, request: operations.PutWorkspaceIDMembersMemberIDActivitiesIDRequest) -> operations.PutWorkspaceIDMembersMemberIDActivitiesIDResponse:
        r"""Update a custom activity for a member
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/activities/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWorkspaceIDMembersMemberIDActivitiesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 422:
            pass

        return res

    