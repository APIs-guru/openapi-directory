import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class FailedConnections:
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

    
    def get_network_wireless_failed_connections(self, request: operations.GetNetworkWirelessFailedConnectionsRequest) -> operations.GetNetworkWirelessFailedConnectionsResponse:
        r"""List of all failed client connection events on this network in a given time range
        List of all failed client connection events on this network in a given time range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/failedConnections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessFailedConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_failed_connections_200_application_json_object = out

        return res

    