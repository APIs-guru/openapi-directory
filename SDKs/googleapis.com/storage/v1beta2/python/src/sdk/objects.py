import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Objects:
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

    
    def storage_objects_compose(self, request: operations.StorageObjectsComposeRequest) -> operations.StorageObjectsComposeResponse:
        r"""Concatenates a list of existing objects into a new object in the same bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{destinationBucket}/o/{destinationObject}/compose", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsComposeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Object])
                res.object = out

        return res

    
    def storage_objects_copy(self, request: operations.StorageObjectsCopyRequest) -> operations.StorageObjectsCopyResponse:
        r"""Copies an object to a destination in the same location. Optionally overrides metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Object])
                res.object = out

        return res

    
    def storage_objects_delete(self, request: operations.StorageObjectsDeleteRequest) -> operations.StorageObjectsDeleteResponse:
        r"""Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_objects_get(self, request: operations.StorageObjectsGetRequest) -> operations.StorageObjectsGetResponse:
        r"""Retrieves objects or their associated metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Object])
                res.object = out

        return res

    
    def storage_objects_insert(self, request: operations.StorageObjectsInsertRequest) -> operations.StorageObjectsInsertResponse:
        r"""Stores new data blobs and associated metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Object])
                res.object = out

        return res

    
    def storage_objects_list(self, request: operations.StorageObjectsListRequest) -> operations.StorageObjectsListResponse:
        r"""Retrieves a list of objects matching the criteria.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Objects])
                res.objects = out

        return res

    
    def storage_objects_patch(self, request: operations.StorageObjectsPatchRequest) -> operations.StorageObjectsPatchResponse:
        r"""Updates a data blob's associated metadata. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Object])
                res.object = out

        return res

    
    def storage_objects_update(self, request: operations.StorageObjectsUpdateRequest) -> operations.StorageObjectsUpdateResponse:
        r"""Updates a data blob's associated metadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Object])
                res.object = out

        return res

    
    def storage_objects_watch_all(self, request: operations.StorageObjectsWatchAllRequest) -> operations.StorageObjectsWatchAllResponse:
        r"""Watch for changes on all objects in a bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectsWatchAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    