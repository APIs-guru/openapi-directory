import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class TimeCard:
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

    
    def get_my_time_card(self, request: operations.GetMyTimeCardRequest) -> operations.GetMyTimeCardResponse:
        r"""Get a specific my time cards
        Get a specific my time cards
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/myTimeCards/{timeCard_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyTimeCardResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.time_card_detail_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.time_card_detail_vo = out
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

    
    def get_my_time_card_list(self, request: operations.GetMyTimeCardListRequest) -> operations.GetMyTimeCardListResponse:
        r"""List my time cards
        List my time cards
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/myTimeCards", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMyTimeCardListResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.time_card_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.time_card_list_vo = out
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

    
    def get_received_time_card(self, request: operations.GetReceivedTimeCardRequest) -> operations.GetReceivedTimeCardResponse:
        r"""List a specific received time cards
        List a specific received time cards
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/receivedTimeCards/{timeCard_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReceivedTimeCardResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.time_card_received_detail_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.time_card_received_detail_vo = out
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

    
    def get_received_time_card_list(self, request: operations.GetReceivedTimeCardListRequest) -> operations.GetReceivedTimeCardListResponse:
        r"""List received time cards
        List received time cards
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/workgroups/{workgroup_id}/receivedTimeCards", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReceivedTimeCardListResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.time_card_list_vo = out
            if utils.match_content_type(content_type, "application/x-json-smile"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.time_card_list_vo = out
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

    