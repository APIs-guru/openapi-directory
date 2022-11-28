import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DataAPI:
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

    
    def delete_document(self, request: operations.DeleteDocumentRequest) -> operations.DeleteDocumentResponse:
        r"""Delete a document
        This API endpoint deletes an existing document from the server
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/data/{path}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundredAndFour])
                res.four_hundred_and_four = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def get_document(self, request: operations.GetDocumentRequest) -> operations.GetDocumentResponse:
        r"""Get a document
        This API endpoint returns the document specified by `path`.
        
        The server will return a *bad request* (400) response if either:
        - The query requires an input document and you do not provide it
        - You provide the input document but the query has already defined it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/data/{path}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDocument200ApplicationJSON])
                res.get_document_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def get_document_with_path(self, request: operations.GetDocumentWithPathRequest) -> operations.GetDocumentWithPathResponse:
        r"""Get a document (with input)
        The server will return a *bad request* (400) response if either:
        - The query requires an input document and you do not provide it
        - You provided an input document but the query has already defined it.
        
        If `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/data/{path}", request.path_params)
        
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

        res = operations.GetDocumentWithPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDocumentWithPath200ApplicationJSON])
                res.get_document_with_path_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FourHundred])
                res.four_hundred = out

        return res

    
    def get_document_with_web_hook(self, request: operations.GetDocumentWithWebHookRequest) -> operations.GetDocumentWithWebHookResponse:
        r"""Get a document (with webhook)
        The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:
        
          ```yaml
          package opa.examples
          import input.example.flag
          allow_request { flag == true }
          ```
        
        The server will return a *not found* (404) response if the requested document is missing or undefined.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v0/data/{path}", request.path_params)
        
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

        res = operations.GetDocumentWithWebHookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDocumentWithWebHook200ApplicationJSON])
                res.get_document_with_web_hook_200_application_json_object = out
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

    
    def patch_document(self, request: operations.PatchDocumentRequest) -> operations.PatchDocumentResponse:
        r"""Update a document
        This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/data/{path}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
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

    
    def put_document(self, request: operations.PutDocumentRequest) -> operations.PutDocumentResponse:
        r"""Create or overwrite a document
        If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.
        
        This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/data/{path}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
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

    