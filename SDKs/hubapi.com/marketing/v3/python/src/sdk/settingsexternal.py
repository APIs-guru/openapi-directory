import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SettingsExternal:
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

    
    def get_marketing_v3_marketing_events_app_id_settings_get_all(self, request: operations.GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest) -> operations.GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/{appId}/settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventDetailSettings])
                res.event_detail_settings = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_marketing_v3_marketing_events_app_id_settings_create(self, request: operations.PostMarketingV3MarketingEventsAppIDSettingsCreateRequest) -> operations.PostMarketingV3MarketingEventsAppIDSettingsCreateResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/marketing/v3/marketing-events/{appId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostMarketingV3MarketingEventsAppIDSettingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventDetailSettings])
                res.event_detail_settings = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    