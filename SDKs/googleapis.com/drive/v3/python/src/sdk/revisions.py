import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Revisions:
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

    
    def drive_revisions_delete(self, request: operations.DriveRevisionsDeleteRequest) -> operations.DriveRevisionsDeleteResponse:
        r"""Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/revisions/{revisionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRevisionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_revisions_get(self, request: operations.DriveRevisionsGetRequest) -> operations.DriveRevisionsGetResponse:
        r"""Gets a revision's metadata or content by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/revisions/{revisionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRevisionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Revision])
                res.revision = out

        return res

    
    def drive_revisions_list(self, request: operations.DriveRevisionsListRequest) -> operations.DriveRevisionsListResponse:
        r"""Lists a file's revisions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/revisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRevisionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RevisionList])
                res.revision_list = out

        return res

    
    def drive_revisions_update(self, request: operations.DriveRevisionsUpdateRequest) -> operations.DriveRevisionsUpdateResponse:
        r"""Updates a revision with patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/revisions/{revisionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRevisionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Revision])
                res.revision = out

        return res

    