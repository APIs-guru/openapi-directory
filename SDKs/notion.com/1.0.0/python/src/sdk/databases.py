import requests
from typing import Optional
from sdk.models import operations
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

    
    def query_a_database(self, request: operations.QueryADatabaseRequest) -> operations.QueryADatabaseResponse:
        r"""Query a database
        Query a database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/databases/{id}/query", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QueryADatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.QueryADatabase200ApplicationJSON])
                res.query_a_database_200_application_json_object = out

        return res

    
    def retrieve_a_database(self, request: operations.RetrieveADatabaseRequest) -> operations.RetrieveADatabaseResponse:
        r"""Retrieve a database
        Retrieves a database object using the ID specified in the request path. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/databases/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveADatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveADatabase200ApplicationJSON])
                res.retrieve_a_database_200_application_json_object = out

        return res

    
    def update_a_database(self, request: operations.UpdateADatabaseRequest) -> operations.UpdateADatabaseResponse:
        r"""Update a database
        Update a database
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/databases/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateADatabaseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateADatabase200ApplicationJSON])
                res.update_a_database_200_application_json_object = out

        return res

    