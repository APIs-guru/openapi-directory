import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Quote:
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

    
    def get_v1_workgroups_workgroup_id_quotes(self, request: operations.GetV1WorkgroupsWorkgroupIDQuotesRequest) -> operations.GetV1WorkgroupsWorkgroupIDQuotesResponse:
        r"""List the quotes of workgroup level
        List the quotes of workgroup level
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/quotes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1WorkgroupsWorkgroupIDQuotesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_of_wg_level_simple_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_of_wg_level_simple_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_quote(self, request: operations.GetQuoteRequest) -> operations.GetQuoteResponse:
        r"""Get a specific quote of project
        Get a specific quote of project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/quotes/{quote_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_expand_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_expand_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_quote_list(self, request: operations.GetQuoteListRequest) -> operations.GetQuoteListResponse:
        r"""List the quotes
        List the quotes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/quotes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.quote_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def get_quote_state_list(self, request: operations.GetQuoteStateListRequest) -> operations.GetQuoteStateListResponse:
        r"""List the quote states
        List the quote states
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/quoteStates", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuoteStateListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.object_state_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.object_state_list_vo = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    
    def put_quote(self, request: operations.PutQuoteRequest) -> operations.PutQuoteResponse:
        r"""Accept / Reject a Quote
        Accept / Reject a Quote
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/projects/{project_id}/quotes/{quote_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutQuoteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.http_status_vo = out

        return res

    