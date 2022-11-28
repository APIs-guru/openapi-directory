import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class QueryAPI:
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

    
    def get_query(self, request: operations.GetQueryRequest) -> operations.GetQueryResponse:
        r"""Execute an ad-hoc query (simple)
        This API endpoint returns bindings for the variables in the query.
        
        For more complex JSON queries, use `POST /v1/query` instead.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/query"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetQuery200ApplicationJSON])
                res.get_query_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def post_query(self, request: operations.PostQueryRequest) -> operations.PostQueryResponse:
        r"""Execute an ad-hoc query (complex)
        This API endpoint returns bindings for the variables in the query.
        
        For simpler JSON queries, you may use `GET /v1/query` instead.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/query"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostQuery200ApplicationJSON])
                res.post_query_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 501:
            pass

        return res

    
    def post_simple_query(self, request: operations.PostSimpleQueryRequest) -> operations.PostSimpleQueryResponse:
        r"""Execute a simple query
        This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
        For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:
        
          ```yaml
          package system
          main = msg {
            msg := sprintf(\"hello, %v\", input.user)
          }
          ```
        
        The server will return a *not found* (404) response if */data/system/main* is undefined.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSimpleQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndFour])
                res.four_hundred_and_four = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    