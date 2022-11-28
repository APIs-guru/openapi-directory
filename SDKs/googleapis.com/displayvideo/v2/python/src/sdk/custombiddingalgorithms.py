import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CustomBiddingAlgorithms:
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

    
    def displayvideo_custom_bidding_algorithms_create(self, request: operations.DisplayvideoCustomBiddingAlgorithmsCreateRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse:
        r"""Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/customBiddingAlgorithms"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingAlgorithm])
                res.custom_bidding_algorithm = out

        return res

    
    def displayvideo_custom_bidding_algorithms_get(self, request: operations.DisplayvideoCustomBiddingAlgorithmsGetRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsGetResponse:
        r"""Gets a custom bidding algorithm.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingAlgorithm])
                res.custom_bidding_algorithm = out

        return res

    
    def displayvideo_custom_bidding_algorithms_list(self, request: operations.DisplayvideoCustomBiddingAlgorithmsListRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsListResponse:
        r"""Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/customBiddingAlgorithms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomBiddingAlgorithmsResponse])
                res.list_custom_bidding_algorithms_response = out

        return res

    
    def displayvideo_custom_bidding_algorithms_patch(self, request: operations.DisplayvideoCustomBiddingAlgorithmsPatchRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse:
        r"""Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingAlgorithm])
                res.custom_bidding_algorithm = out

        return res

    
    def displayvideo_custom_bidding_algorithms_scripts_create(self, request: operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse:
        r"""Creates a new custom bidding script. Returns the newly created script if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingScript])
                res.custom_bidding_script = out

        return res

    
    def displayvideo_custom_bidding_algorithms_scripts_get(self, request: operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse:
        r"""Gets a custom bidding script.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingScript])
                res.custom_bidding_script = out

        return res

    
    def displayvideo_custom_bidding_algorithms_scripts_list(self, request: operations.DisplayvideoCustomBiddingAlgorithmsScriptsListRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse:
        r"""Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsScriptsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCustomBiddingScriptsResponse])
                res.list_custom_bidding_scripts_response = out

        return res

    
    def displayvideo_custom_bidding_algorithms_upload_script(self, request: operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptRequest) -> operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse:
        r"""Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomBiddingScriptRef])
                res.custom_bidding_script_ref = out

        return res

    