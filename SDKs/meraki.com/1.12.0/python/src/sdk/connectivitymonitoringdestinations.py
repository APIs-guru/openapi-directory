import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class ConnectivityMonitoringDestinations:
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

    
    def get_network_appliance_connectivity_monitoring_destinations(self, request: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest) -> operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse:
        r"""Return the connectivity testing destinations for an MX network
        Return the connectivity testing destinations for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_connectivity_monitoring_destinations(self, request: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) -> operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
        r"""Return the connectivity testing destinations for an MG network
        Return the connectivity testing destinations for an MG network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def update_network_appliance_connectivity_monitoring_destinations(self, request: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest) -> operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse:
        r"""Update the connectivity testing destinations for an MX network
        Update the connectivity testing destinations for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/connectivityMonitoringDestinations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_connectivity_monitoring_destinations(self, request: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest) -> operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse:
        r"""Update the connectivity testing destinations for an MG network
        Update the connectivity testing destinations for an MG network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_connectivity_monitoring_destinations_200_application_json_object = out

        return res

    