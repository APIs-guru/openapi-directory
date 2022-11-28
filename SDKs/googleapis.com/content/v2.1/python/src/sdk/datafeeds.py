import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Datafeeds:
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

    
    def content_datafeeds_custombatch(self, request: operations.ContentDatafeedsCustombatchRequest) -> operations.ContentDatafeedsCustombatchResponse:
        r"""Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/datafeeds/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatafeedsCustomBatchResponse])
                res.datafeeds_custom_batch_response = out

        return res

    
    def content_datafeeds_delete(self, request: operations.ContentDatafeedsDeleteRequest) -> operations.ContentDatafeedsDeleteResponse:
        r"""Deletes a datafeed configuration from your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeeds/{datafeedId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_datafeeds_fetchnow(self, request: operations.ContentDatafeedsFetchnowRequest) -> operations.ContentDatafeedsFetchnowResponse:
        r"""Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeeds/{datafeedId}/fetchNow", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsFetchnowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatafeedsFetchNowResponse])
                res.datafeeds_fetch_now_response = out

        return res

    
    def content_datafeeds_get(self, request: operations.ContentDatafeedsGetRequest) -> operations.ContentDatafeedsGetResponse:
        r"""Retrieves a datafeed configuration from your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeeds/{datafeedId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Datafeed])
                res.datafeed = out

        return res

    
    def content_datafeeds_insert(self, request: operations.ContentDatafeedsInsertRequest) -> operations.ContentDatafeedsInsertResponse:
        r"""Registers a datafeed configuration with your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeeds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Datafeed])
                res.datafeed = out

        return res

    
    def content_datafeeds_list(self, request: operations.ContentDatafeedsListRequest) -> operations.ContentDatafeedsListResponse:
        r"""Lists the configurations for datafeeds in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeeds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DatafeedsListResponse])
                res.datafeeds_list_response = out

        return res

    
    def content_datafeeds_update(self, request: operations.ContentDatafeedsUpdateRequest) -> operations.ContentDatafeedsUpdateResponse:
        r"""Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/datafeeds/{datafeedId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentDatafeedsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Datafeed])
                res.datafeed = out

        return res

    