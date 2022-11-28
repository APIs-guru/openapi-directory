import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Blobs:
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

    
    def add_blob(self, request: operations.AddBlobRequest) -> operations.AddBlobResponse:
        r"""Create binary large object (blob) metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/blobs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBlobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def delete_blob(self, request: operations.DeleteBlobRequest) -> operations.DeleteBlobResponse:
        r"""Delete binary large object (blob)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blobs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteBlobResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def get_blob_by_id(self, request: operations.GetBlobByIDRequest) -> operations.GetBlobByIDResponse:
        r"""Download a binary large object (blob)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blobs/{id}/download/{filename}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlobByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/*"):
                res.get_blob_by_id_200_image_wildcard_binary_string = r.content

        return res

    
    def get_blob_metadata_by_id(self, request: operations.GetBlobMetadataByIDRequest) -> operations.GetBlobMetadataByIDResponse:
        r"""Get binary large object (blob)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blobs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlobMetadataByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Blob])
                res.blob = out

        return res

    
    def get_blobs(self, request: operations.GetBlobsRequest) -> operations.GetBlobsResponse:
        r"""Get all binary large objects (blob)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/blobs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlobsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBlobs200ApplicationJSON])
                res.get_blobs_200_application_json_object = out

        return res

    
    def upload_blob_by_id(self, request: operations.UploadBlobByIDRequest) -> operations.UploadBlobByIDResponse:
        r"""Create binary large object (blob)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blobs/{id}/upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadBlobByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    