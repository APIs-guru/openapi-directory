import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class File:
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

    
    def get_file(self, request: operations.GetFileRequest) -> operations.GetFileResponse:
        r"""Get File from Project.  Works for Regular and Remote Files
        Get File from Project.  Works for Regular and Remote Files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/files/{file_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_response_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_response_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_file_tags(self, request: operations.GetFileTagsRequest) -> operations.GetFileTagsResponse:
        r"""List Tags from Workgroup and Project.
        List Tags from Workgroup and Project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/fileTags", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_tag_response_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_tag_response_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_files(self, request: operations.GetFilesRequest) -> operations.GetFilesResponse:
        r"""List Files from Project.  Works for Regular and Remote Files
        List Files from Project.  Works for Regular and Remote Files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/files", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_response_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_response_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def upload_file(self, request: operations.UploadFileRequest) -> operations.UploadFileResponse:
        r"""Upload File to Project.  A multipart/form-data request with a name \"file\"
        Upload File to Project.  A multipart/form-data request with a name \"file\"
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/1.1/workgroups/{workgroup_id}/projects/{project_id}/files", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_response_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.file_response_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    