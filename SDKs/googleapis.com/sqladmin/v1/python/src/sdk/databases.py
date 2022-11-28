import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Databases:
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

    
    def sql_databases_delete(self, request: operations.SQLDatabasesDeleteRequest) -> operations.SQLDatabasesDeleteResponse:
        r"""Deletes a database from a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/databases/{database}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLDatabasesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_databases_get(self, request: operations.SQLDatabasesGetRequest) -> operations.SQLDatabasesGetResponse:
        r"""Retrieves a resource containing information about a database inside a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/databases/{database}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLDatabasesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Database])
                res.database = out

        return res

    
    def sql_databases_insert(self, request: operations.SQLDatabasesInsertRequest) -> operations.SQLDatabasesInsertResponse:
        r"""Inserts a resource containing information about a database inside a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/databases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLDatabasesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_databases_list(self, request: operations.SQLDatabasesListRequest) -> operations.SQLDatabasesListResponse:
        r"""Lists databases in the specified Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/databases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLDatabasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatabasesListResponse])
                res.databases_list_response = out

        return res

    
    def sql_databases_patch(self, request: operations.SQLDatabasesPatchRequest) -> operations.SQLDatabasesPatchResponse:
        r"""Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/databases/{database}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLDatabasesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def sql_databases_update(self, request: operations.SQLDatabasesUpdateRequest) -> operations.SQLDatabasesUpdateResponse:
        r"""Updates a resource containing information about a database inside a Cloud SQL instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{project}/instances/{instance}/databases/{database}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SQLDatabasesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    