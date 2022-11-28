import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def firebasestorage_projects_buckets_add_firebase(self, request: operations.FirebasestorageProjectsBucketsAddFirebaseRequest) -> operations.FirebasestorageProjectsBucketsAddFirebaseResponse:
        r"""Links a Google Cloud Storage bucket to a Firebase project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{bucket}:addFirebase", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasestorageProjectsBucketsAddFirebaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    
    def firebasestorage_projects_buckets_get(self, request: operations.FirebasestorageProjectsBucketsGetRequest) -> operations.FirebasestorageProjectsBucketsGetResponse:
        r"""Gets a single linked storage bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasestorageProjectsBucketsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    
    def firebasestorage_projects_buckets_list(self, request: operations.FirebasestorageProjectsBucketsListRequest) -> operations.FirebasestorageProjectsBucketsListResponse:
        r"""Lists the linked storage buckets for a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/buckets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasestorageProjectsBucketsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBucketsResponse])
                res.list_buckets_response = out

        return res

    
    def firebasestorage_projects_buckets_remove_firebase(self, request: operations.FirebasestorageProjectsBucketsRemoveFirebaseRequest) -> operations.FirebasestorageProjectsBucketsRemoveFirebaseResponse:
        r"""Unlinks a linked Google Cloud Storage bucket from a Firebase project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{bucket}:removeFirebase", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasestorageProjectsBucketsRemoveFirebaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    