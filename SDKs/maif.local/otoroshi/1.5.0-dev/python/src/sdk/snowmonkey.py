import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Snowmonkey:
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

    
    def get_snow_monkey_config(self, request: operations.GetSnowMonkeyConfigRequest) -> operations.GetSnowMonkeyConfigResponse:
        r"""Get current Snow Monkey config
        Get current Snow Monkey config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/config"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnowMonkeyConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnowMonkeyConfig])
                res.snow_monkey_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_snow_monkey_outages(self, request: operations.GetSnowMonkeyOutagesRequest) -> operations.GetSnowMonkeyOutagesResponse:
        r"""Get all current Snow Monkey ourages
        Get all current Snow Monkey ourages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/outages"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnowMonkeyOutagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Outage]])
                res.outages = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def patch_snow_monkey(self, request: operations.PatchSnowMonkeyRequest) -> operations.PatchSnowMonkeyResponse:
        r"""Update current Snow Monkey config
        Update current Snow Monkey config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/config"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchSnowMonkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnowMonkeyConfig])
                res.snow_monkey_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def reset_snow_monkey(self, request: operations.ResetSnowMonkeyRequest) -> operations.ResetSnowMonkeyResponse:
        r"""Reset Snow Monkey Outages for the day
        Reset Snow Monkey Outages for the day
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/outages"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetSnowMonkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Done])
                res.done = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def start_snow_monkey(self, request: operations.StartSnowMonkeyRequest) -> operations.StartSnowMonkeyResponse:
        r"""Start the Snow Monkey
        Start the Snow Monkey
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/_start"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StartSnowMonkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Done])
                res.done = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def stop_snow_monkey(self, request: operations.StopSnowMonkeyRequest) -> operations.StopSnowMonkeyResponse:
        r"""Stop the Snow Monkey
        Stop the Snow Monkey
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/_stop"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopSnowMonkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Done])
                res.done = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_snow_monkey(self, request: operations.UpdateSnowMonkeyRequest) -> operations.UpdateSnowMonkeyResponse:
        r"""Update current Snow Monkey config
        Update current Snow Monkey config
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/snowmonkey/config"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSnowMonkeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SnowMonkeyConfig])
                res.snow_monkey_config = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    