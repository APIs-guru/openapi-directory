import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Datafeedstatuses:
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

    
    def content_datafeedstatuses_custombatch(self, request: operations.ContentDatafeedstatusesCustombatchRequest) -> operations.ContentDatafeedstatusesCustombatchResponse:
        r"""Gets multiple Merchant Center datafeed statuses in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datafeedstatuses/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedstatusesCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatafeedstatusesCustomBatchResponse])
                res.datafeedstatuses_custom_batch_response = out

        return res

    
    def content_datafeedstatuses_get(self, request: operations.ContentDatafeedstatusesGetRequest) -> operations.ContentDatafeedstatusesGetResponse:
        r"""Retrieves the status of a datafeed from your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeedstatuses/{datafeedId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedstatusesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatafeedStatus])
                res.datafeed_status = out

        return res

    
    def content_datafeedstatuses_list(self, request: operations.ContentDatafeedstatusesListRequest) -> operations.ContentDatafeedstatusesListResponse:
        r"""Lists the statuses of the datafeeds in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeedstatuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedstatusesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatafeedstatusesListResponse])
                res.datafeedstatuses_list_response = out

        return res

    