import requests
from sdk.models import operations
from . import utils

class Request:
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

    
    def delete_request_id_(self, request: operations.DeleteRequestIDRequest) -> operations.DeleteRequestIDResponse:
        r"""Delete a given request.
        Delete a given request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/request/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_request(self, request: operations.GetRequestRequest) -> operations.GetRequestResponse:
        r"""Get a simple directory listing of all requests
        Get a simple directory listing of all requests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/request"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_request_id_(self, request: operations.GetRequestIDRequest) -> operations.GetRequestIDResponse:
        r"""Show details about a specified request.
        Show details about a specified request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/request/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_request_view_equal_collection(self, request: operations.GetRequestViewEqualCollectionRequest) -> operations.GetRequestViewEqualCollectionResponse:
        r"""Get a collection of requests for a specified target
        Get a collection of requests for a specified target. **NOTE:**
        You need to set at least one of the following parameters in order
        to use this endpoint:
        
        * `user`
        * `project`
        * `package`
        * `states`
        * `types`
        * `ids`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/request?view=collection"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRequestViewEqualCollectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def post_request(self, request: operations.PostRequestRequest) -> operations.PostRequestResponse:
        r"""Create a request
        Create a request
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/request"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def post_request_id_(self, request: operations.PostRequestIDRequest) -> operations.PostRequestIDResponse:
        r"""Apply certain actions on a specified request.
        Apply certain actions on a specified request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/request/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def post_request_id_cmd_equal_diff(self, request: operations.PostRequestIDCmdEqualDiffRequest) -> operations.PostRequestIDCmdEqualDiffResponse:
        r"""Get the diff for all packages affected by the request.
        Get the diff for all packages affected by the request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/request/{id}?cmd=diff", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRequestIDCmdEqualDiffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/plain; charset=utf-8"):
                res.post_request_id_cmd_equal_diff_200_text_plain_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def put_request_id_(self, request: operations.PutRequestIDRequest) -> operations.PutRequestIDResponse:
        r"""Modify a given request.
        Modify a given request.
        
        **NOTE:** Certain parts of a request can only be changed by admins.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/request/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    