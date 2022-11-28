import requests
from sdk.models import operations
from . import utils

class Notes:
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

    
    def get_workspace_id_members_member_id_notes(self, request: operations.GetWorkspaceIDMembersMemberIDNotesRequest) -> operations.GetWorkspaceIDMembersMemberIDNotesResponse:
        r"""Get the member's notes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/notes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceIDMembersMemberIDNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_workspace_id_members_member_id_notes(self, request: operations.PostWorkspaceIDMembersMemberIDNotesRequest) -> operations.PostWorkspaceIDMembersMemberIDNotesResponse:
        r"""Create a note
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/notes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspaceIDMembersMemberIDNotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass

        return res

    
    def put_workspace_id_members_member_id_notes_id_(self, request: operations.PutWorkspaceIDMembersMemberIDNotesIDRequest) -> operations.PutWorkspaceIDMembersMemberIDNotesIDResponse:
        r"""Update a note
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{workspace_id}/members/{member_id}/notes/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWorkspaceIDMembersMemberIDNotesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    