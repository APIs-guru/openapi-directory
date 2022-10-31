import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"http://mbus.local",
	"https://mbus.local/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get(self, request: operations.GetRequest) -> operations.GetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mbus/get/{device}/{baudrate}/{address}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml"):
                res.mbus_data = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    
    def get_multi(self, request: operations.GetMultiRequest) -> operations.GetMultiResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mbus/getMulti/{device}/{baudrate}/{address}/{maxframes}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMultiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml"):
                res.mbus_data = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    
    def hat(self) -> operations.HatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mbus/hat"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.hat = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    
    def hat_off(self) -> operations.HatOffResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mbus/hat/off"

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HatOffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    
    def hat_on(self) -> operations.HatOnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mbus/hat/on"

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.HatOnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    
    def mbus_api(self) -> operations.MbusAPIResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/mbus/api"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MbusAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/x-yaml"):
                res.yaml = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    
    def scan(self, request: operations.ScanRequest) -> operations.ScanResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mbus/scan/{device}/{baudrate}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/plain"):
                res.slaves = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "text/plain"):
                res.text_error = r.content

        return res

    