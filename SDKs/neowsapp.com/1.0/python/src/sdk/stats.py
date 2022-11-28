import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Stats:
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

    
    def retrieve_current_neo_statistics(self) -> operations.RetrieveCurrentNeoStatisticsResponse:
        r"""Get the Near Earth Object data set totals
        retrieveCurrentNeoStatistics
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rest/v1/stats"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveCurrentNeoStatisticsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Statistics])
                res.statistics = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    