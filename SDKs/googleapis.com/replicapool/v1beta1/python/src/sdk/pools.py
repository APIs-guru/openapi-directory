import requests
from sdk.models import operations
from . import utils

class Pools:
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

    
    def replicapool_pools_delete(self, request: operations.ReplicapoolPoolsDeleteRequest) -> operations.ReplicapoolPoolsDeleteResponse:
        r"""Deletes a replica pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def replicapool_pools_get(self, request: operations.ReplicapoolPoolsGetRequest) -> operations.ReplicapoolPoolsGetResponse:
        r"""Gets information about a single replica pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def replicapool_pools_insert(self, request: operations.ReplicapoolPoolsInsertRequest) -> operations.ReplicapoolPoolsInsertResponse:
        r"""Inserts a new replica pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def replicapool_pools_list(self, request: operations.ReplicapoolPoolsListRequest) -> operations.ReplicapoolPoolsListResponse:
        r"""List all replica pools.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def replicapool_pools_resize(self, request: operations.ReplicapoolPoolsResizeRequest) -> operations.ReplicapoolPoolsResizeResponse:
        r"""Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/resize", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsResizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def replicapool_pools_updatetemplate(self, request: operations.ReplicapoolPoolsUpdatetemplateRequest) -> operations.ReplicapoolPoolsUpdatetemplateResponse:
        r"""Update the template used by the pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{projectName}/zones/{zone}/pools/{poolName}/updateTemplate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplicapoolPoolsUpdatetemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    