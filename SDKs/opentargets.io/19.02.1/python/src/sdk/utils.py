import requests
from sdk.models import operations
from . import utils

class Utils:
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

    
    def get_data_metrics(self) -> operations.GetDataMetricsResponse:
        r"""Get metrics about the current data release
        Returns the metrics about associations and evidences, divided by datasource, genes and so on.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/utils/metrics"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_data_stats(self) -> operations.GetDataStatsResponse:
        r"""Get statistics about the current data release
        Returns the number of associations and evidences, divided by datasource.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/utils/stats"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ping(self) -> operations.GetPingResponse:
        r"""Ping service
        Check if the API is up
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/utils/ping"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_therapeutic_areas(self) -> operations.GetTherapeuticAreasResponse:
        r"""Get the list of therapeutic areas about the current data release
        Returns the list of therapeutic areas for the current data release
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/utils/therapeuticareas"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTherapeuticAreasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_version(self) -> operations.GetVersionResponse:
        r"""Get API version
        Returns current API version.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/platform/public/utils/version"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    