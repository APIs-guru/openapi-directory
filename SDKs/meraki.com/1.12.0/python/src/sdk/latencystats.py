import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class LatencyStats:
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

    
    def get_device_wireless_latency_stats(self, request: operations.GetDeviceWirelessLatencyStatsRequest) -> operations.GetDeviceWirelessLatencyStatsResponse:
        r"""Aggregated latency info for a given AP on this network
        Aggregated latency info for a given AP on this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_wireless_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_client_latency_stats(self, request: operations.GetNetworkWirelessClientLatencyStatsRequest) -> operations.GetNetworkWirelessClientLatencyStatsResponse:
        r"""Aggregated latency info for a given client on this network
        Aggregated latency info for a given client on this network. Clients are identified by their MAC.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/{clientId}/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_client_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_clients_latency_stats(self, request: operations.GetNetworkWirelessClientsLatencyStatsRequest) -> operations.GetNetworkWirelessClientsLatencyStatsResponse:
        r"""Aggregated latency info for this network, grouped by clients
        Aggregated latency info for this network, grouped by clients
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/clients/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessClientsLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_clients_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_devices_latency_stats(self, request: operations.GetNetworkWirelessDevicesLatencyStatsRequest) -> operations.GetNetworkWirelessDevicesLatencyStatsResponse:
        r"""Aggregated latency info for this network, grouped by node
        Aggregated latency info for this network, grouped by node
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/devices/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessDevicesLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_devices_latency_stats_200_application_json_object = out

        return res

    
    def get_network_wireless_latency_stats(self, request: operations.GetNetworkWirelessLatencyStatsRequest) -> operations.GetNetworkWirelessLatencyStatsResponse:
        r"""Aggregated latency info for this network
        Aggregated latency info for this network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/wireless/latencyStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkWirelessLatencyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_wireless_latency_stats_200_application_json_object = out

        return res

    