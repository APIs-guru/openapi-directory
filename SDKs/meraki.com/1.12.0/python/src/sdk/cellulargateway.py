import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class CellularGateway:
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

    
    def get_device_cellular_gateway_lan(self, request: operations.GetDeviceCellularGatewayLanRequest) -> operations.GetDeviceCellularGatewayLanResponse:
        r"""Show the LAN Settings of a MG
        Show the LAN Settings of a MG
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/lan", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCellularGatewayLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_cellular_gateway_lan_200_application_json_object = out

        return res

    
    def get_device_cellular_gateway_port_forwarding_rules(self, request: operations.GetDeviceCellularGatewayPortForwardingRulesRequest) -> operations.GetDeviceCellularGatewayPortForwardingRulesResponse:
        r"""Returns the port forwarding rules for a single MG.
        Returns the port forwarding rules for a single MG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/portForwardingRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceCellularGatewayPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_cellular_gateway_port_forwarding_rules_200_application_json_object = out

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

    
    def get_network_cellular_gateway_dhcp(self, request: operations.GetNetworkCellularGatewayDhcpRequest) -> operations.GetNetworkCellularGatewayDhcpResponse:
        r"""List common DHCP settings of MGs
        List common DHCP settings of MGs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_dhcp_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_subnet_pool(self, request: operations.GetNetworkCellularGatewaySubnetPoolRequest) -> operations.GetNetworkCellularGatewaySubnetPoolResponse:
        r"""Return the subnet pool and mask configured for MGs in the network.
        Return the subnet pool and mask configured for MGs in the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    def get_network_cellular_gateway_uplink(self, request: operations.GetNetworkCellularGatewayUplinkRequest) -> operations.GetNetworkCellularGatewayUplinkResponse:
        r"""Returns the uplink settings for your MG network.
        Returns the uplink settings for your MG network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    
    def get_organization_cellular_gateway_uplink_statuses(self, request: operations.GetOrganizationCellularGatewayUplinkStatusesRequest) -> operations.GetOrganizationCellularGatewayUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MG cellular gateway in the organization
        List the uplink status of every Meraki MG cellular gateway in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationCellularGatewayUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_cellular_gateway_uplink_statuses_200_application_json_object = out

        return res

    
    def update_device_cellular_gateway_lan(self, request: operations.UpdateDeviceCellularGatewayLanRequest) -> operations.UpdateDeviceCellularGatewayLanResponse:
        r"""Update the LAN Settings for a single MG.
        Update the LAN Settings for a single MG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/lan", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCellularGatewayLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_cellular_gateway_lan_200_application_json_object = out

        return res

    
    def update_device_cellular_gateway_port_forwarding_rules(self, request: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest) -> operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse:
        r"""Updates the port forwarding rules for a single MG.
        Updates the port forwarding rules for a single MG.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/cellularGateway/portForwardingRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_cellular_gateway_port_forwarding_rules_200_application_json_object = out

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

    
    def update_network_cellular_gateway_dhcp(self, request: operations.UpdateNetworkCellularGatewayDhcpRequest) -> operations.UpdateNetworkCellularGatewayDhcpResponse:
        r"""Update common DHCP settings of MGs
        Update common DHCP settings of MGs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_dhcp_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_subnet_pool(self, request: operations.UpdateNetworkCellularGatewaySubnetPoolRequest) -> operations.UpdateNetworkCellularGatewaySubnetPoolResponse:
        r"""Update the subnet pool and mask configuration for MGs in the network.
        Update the subnet pool and mask configuration for MGs in the network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/subnetPool", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewaySubnetPoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_subnet_pool_200_application_json_object = out

        return res

    
    def update_network_cellular_gateway_uplink(self, request: operations.UpdateNetworkCellularGatewayUplinkRequest) -> operations.UpdateNetworkCellularGatewayUplinkResponse:
        r"""Updates the uplink settings for your MG network.
        Updates the uplink settings for your MG network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/cellularGateway/uplink", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkCellularGatewayUplinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_cellular_gateway_uplink_200_application_json_object = out

        return res

    