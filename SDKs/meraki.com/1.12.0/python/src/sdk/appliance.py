import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Appliance:
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

    
    def create_network_appliance_static_route(self, request: operations.CreateNetworkApplianceStaticRouteRequest) -> operations.CreateNetworkApplianceStaticRouteResponse:
        r"""Add a static route for an MX or teleworker network
        Add a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_static_route_201_application_json_object = out

        return res

    
    def create_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Add a custom performance class for an MX network
        Add a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object = out

        return res

    
    def create_network_appliance_vlan(self, request: operations.CreateNetworkApplianceVlanRequest) -> operations.CreateNetworkApplianceVlanResponse:
        r"""Add a VLAN
        Add a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_appliance_vlan_201_application_json_object = out

        return res

    
    def delete_network_appliance_static_route(self, request: operations.DeleteNetworkApplianceStaticRouteRequest) -> operations.DeleteNetworkApplianceStaticRouteResponse:
        r"""Delete a static route from an MX or teleworker network
        Delete a static route from an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Delete a custom performance class from an MX network
        Delete a custom performance class from an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_appliance_vlan(self, request: operations.DeleteNetworkApplianceVlanRequest) -> operations.DeleteNetworkApplianceVlanResponse:
        r"""Delete a VLAN from a network
        Delete a VLAN from a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_device_appliance_dhcp_subnets(self, request: operations.GetDeviceApplianceDhcpSubnetsRequest) -> operations.GetDeviceApplianceDhcpSubnetsResponse:
        r"""Return the DHCP subnet information for an appliance
        Return the DHCP subnet information for an appliance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/dhcp/subnets", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceApplianceDhcpSubnetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_dhcp_subnets_200_application_json_object = out

        return res

    
    def get_device_appliance_performance(self, request: operations.GetDeviceAppliancePerformanceRequest) -> operations.GetDeviceAppliancePerformanceResponse:
        r"""Return the performance score for a single MX
        Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/appliance/performance", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceAppliancePerformanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_appliance_performance_200_application_json_object = out

        return res

    
    def get_network_appliance_client_security_events(self, request: operations.GetNetworkApplianceClientSecurityEventsRequest) -> operations.GetNetworkApplianceClientSecurityEventsResponse:
        r"""List the security events for a client
        List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/clients/{clientId}/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceClientSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_client_security_events_200_application_json_object = out

        return res

    
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

    
    def get_network_appliance_content_filtering(self, request: operations.GetNetworkApplianceContentFilteringRequest) -> operations.GetNetworkApplianceContentFilteringResponse:
        r"""Return the content filtering settings for an MX network
        Return the content filtering settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceContentFilteringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_content_filtering_200_application_json_object = out

        return res

    
    def get_network_appliance_content_filtering_categories(self, request: operations.GetNetworkApplianceContentFilteringCategoriesRequest) -> operations.GetNetworkApplianceContentFilteringCategoriesResponse:
        r"""List all available content filtering categories for an MX network
        List all available content filtering categories for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering/categories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceContentFilteringCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_content_filtering_categories_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_cellular_firewall_rules(self, request: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest) -> operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse:
        r"""Return the cellular firewall rules for an MX network
        Return the cellular firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_cellular_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_firewalled_service(self, request: operations.GetNetworkApplianceFirewallFirewalledServiceRequest) -> operations.GetNetworkApplianceFirewallFirewalledServiceResponse:
        r"""Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallFirewalledServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_firewalled_service_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_firewalled_services(self, request: operations.GetNetworkApplianceFirewallFirewalledServicesRequest) -> operations.GetNetworkApplianceFirewallFirewalledServicesResponse:
        r"""List the appliance services and their accessibility rules
        List the appliance services and their accessibility rules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallFirewalledServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_firewalled_services_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_inbound_firewall_rules(self, request: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest) -> operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse:
        r"""Return the inbound firewall rules for an MX network
        Return the inbound firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_inbound_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_l3_firewall_rules(self, request: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest) -> operations.GetNetworkApplianceFirewallL3FirewallRulesResponse:
        r"""Return the L3 firewall rules for an MX network
        Return the L3 firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_l7_firewall_rules(self, request: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest) -> operations.GetNetworkApplianceFirewallL7FirewallRulesResponse:
        r"""List the MX L7 firewall rules for an MX network
        List the MX L7 firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_l7_firewall_rules_application_categories(self, request: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest) -> operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse:
        r"""Return the L7 firewall application categories and their associated applications for an MX network
        Return the L7 firewall application categories and their associated applications for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_l7_firewall_rules_application_categories_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_one_to_many_nat_rules(self, request: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest) -> operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse:
        r"""Return the 1:Many NAT mapping rules for an MX network
        Return the 1:Many NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_one_to_one_nat_rules(self, request: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest) -> operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse:
        r"""Return the 1:1 NAT mapping rules for an MX network
        Return the 1:1 NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_firewall_port_forwarding_rules(self, request: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest) -> operations.GetNetworkApplianceFirewallPortForwardingRulesResponse:
        r"""Return the port forwarding rules for an MX network
        Return the port forwarding rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceFirewallPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_firewall_port_forwarding_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_port(self, request: operations.GetNetworkAppliancePortRequest) -> operations.GetNetworkAppliancePortResponse:
        r"""Return per-port VLAN settings for a single MX port.
        Return per-port VLAN settings for a single MX port.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAppliancePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_port_200_application_json_object = out

        return res

    
    def get_network_appliance_ports(self, request: operations.GetNetworkAppliancePortsRequest) -> operations.GetNetworkAppliancePortsResponse:
        r"""List per-port VLAN settings for all ports of a MX.
        List per-port VLAN settings for all ports of a MX.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkAppliancePortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_ports_200_application_json_object = out

        return res

    
    def get_network_appliance_security_events(self, request: operations.GetNetworkApplianceSecurityEventsRequest) -> operations.GetNetworkApplianceSecurityEventsResponse:
        r"""List the security events for a network
        List the security events for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_events_200_application_json_object = out

        return res

    
    def get_network_appliance_security_intrusion(self, request: operations.GetNetworkApplianceSecurityIntrusionRequest) -> operations.GetNetworkApplianceSecurityIntrusionResponse:
        r"""Returns all supported intrusion settings for an MX network
        Returns all supported intrusion settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def get_network_appliance_security_malware(self, request: operations.GetNetworkApplianceSecurityMalwareRequest) -> operations.GetNetworkApplianceSecurityMalwareResponse:
        r"""Returns all supported malware settings for an MX network
        Returns all supported malware settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_security_malware_200_application_json_object = out

        return res

    
    def get_network_appliance_settings(self, request: operations.GetNetworkApplianceSettingsRequest) -> operations.GetNetworkApplianceSettingsResponse:
        r"""Return the appliance settings for a network
        Return the appliance settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_settings_200_application_json_object = out

        return res

    
    def get_network_appliance_single_lan(self, request: operations.GetNetworkApplianceSingleLanRequest) -> operations.GetNetworkApplianceSingleLanResponse:
        r"""Return single LAN configuration
        Return single LAN configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/singleLan", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceSingleLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_single_lan_200_application_json_object = out

        return res

    
    def get_network_appliance_static_route(self, request: operations.GetNetworkApplianceStaticRouteRequest) -> operations.GetNetworkApplianceStaticRouteResponse:
        r"""Return a static route for an MX or teleworker network
        Return a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_route_200_application_json_object = out

        return res

    
    def get_network_appliance_static_routes(self, request: operations.GetNetworkApplianceStaticRoutesRequest) -> operations.GetNetworkApplianceStaticRoutesResponse:
        r"""List the static routes for an MX or teleworker network
        List the static routes for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_static_routes_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping(self, request: operations.GetNetworkApplianceTrafficShapingRequest) -> operations.GetNetworkApplianceTrafficShapingResponse:
        r"""Display the traffic shaping settings for an MX network
        Display the traffic shaping settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Return a custom performance class for an MX network
        Return a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_custom_performance_classes(self, request: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest) -> operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
        r"""List all custom performance classes for an MX network
        List all custom performance classes for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_rules(self, request: operations.GetNetworkApplianceTrafficShapingRulesRequest) -> operations.GetNetworkApplianceTrafficShapingRulesResponse:
        r"""Display the traffic shaping settings rules for an MX network
        Display the traffic shaping settings rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        r"""Returns the uplink bandwidth settings for your MX network.
        Returns the uplink bandwidth settings for your MX network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    def get_network_appliance_traffic_shaping_uplink_selection(self, request: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse:
        r"""Show uplink selection settings for an MX network
        Show uplink selection settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    def get_network_appliance_uplinks_usage_history(self, request: operations.GetNetworkApplianceUplinksUsageHistoryRequest) -> operations.GetNetworkApplianceUplinksUsageHistoryResponse:
        r"""Get the sent and received bytes for each uplink of a network.
        Get the sent and received bytes for each uplink of a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/uplinks/usageHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceUplinksUsageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_uplinks_usage_history_200_application_json_object = out

        return res

    
    def get_network_appliance_vlan(self, request: operations.GetNetworkApplianceVlanRequest) -> operations.GetNetworkApplianceVlanResponse:
        r"""Return a VLAN
        Return a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlan_200_application_json_object = out

        return res

    
    def get_network_appliance_vlans(self, request: operations.GetNetworkApplianceVlansRequest) -> operations.GetNetworkApplianceVlansResponse:
        r"""List the VLANs for an MX network
        List the VLANs for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_200_application_json_object = out

        return res

    
    def get_network_appliance_vlans_settings(self, request: operations.GetNetworkApplianceVlansSettingsRequest) -> operations.GetNetworkApplianceVlansSettingsResponse:
        r"""Returns the enabled status of VLANs for the network
        Returns the enabled status of VLANs for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    def get_network_appliance_vpn_bgp(self, request: operations.GetNetworkApplianceVpnBgpRequest) -> operations.GetNetworkApplianceVpnBgpResponse:
        r"""Return a Hub BGP Configuration
        Return a Hub BGP Configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/bgp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVpnBgpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vpn_bgp_200_application_json_object = out

        return res

    
    def get_network_appliance_vpn_site_to_site_vpn(self, request: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest) -> operations.GetNetworkApplianceVpnSiteToSiteVpnResponse:
        r"""Return the site-to-site VPN settings of a network
        Return the site-to-site VPN settings of a network. Only valid for MX networks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceVpnSiteToSiteVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_vpn_site_to_site_vpn_200_application_json_object = out

        return res

    
    def get_network_appliance_warm_spare(self, request: operations.GetNetworkApplianceWarmSpareRequest) -> operations.GetNetworkApplianceWarmSpareResponse:
        r"""Return MX warm spare settings
        Return MX warm spare settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def get_organization_appliance_security_events(self, request: operations.GetOrganizationApplianceSecurityEventsRequest) -> operations.GetOrganizationApplianceSecurityEventsResponse:
        r"""List the security events for an organization
        List the security events for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_events_200_application_json_object = out

        return res

    
    def get_organization_appliance_security_intrusion(self, request: operations.GetOrganizationApplianceSecurityIntrusionRequest) -> operations.GetOrganizationApplianceSecurityIntrusionResponse:
        r"""Returns all supported intrusion settings for an organization
        Returns all supported intrusion settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def get_organization_appliance_uplink_statuses(self, request: operations.GetOrganizationApplianceUplinkStatusesRequest) -> operations.GetOrganizationApplianceUplinkStatusesResponse:
        r"""List the uplink status of every Meraki MX and Z series appliances in the organization
        List the uplink status of every Meraki MX and Z series appliances in the organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/uplink/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceUplinkStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_uplink_statuses_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_stats(self, request: operations.GetOrganizationApplianceVpnStatsRequest) -> operations.GetOrganizationApplianceVpnStatsResponse:
        r"""Show VPN history stat for networks in an organization
        Show VPN history stat for networks in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/stats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_stats_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_statuses(self, request: operations.GetOrganizationApplianceVpnStatusesRequest) -> operations.GetOrganizationApplianceVpnStatusesResponse:
        r"""Show VPN status for networks in an organization
        Show VPN status for networks in an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_statuses_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_third_party_vpn_peers(self, request: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest) -> operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse:
        r"""Return the third party VPN peers for an organization
        Return the third party VPN peers for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object = out

        return res

    
    def get_organization_appliance_vpn_vpn_firewall_rules(self, request: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest) -> operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse:
        r"""Return the firewall rules for an organization's site-to-site VPN
        Return the firewall rules for an organization's site-to-site VPN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object = out

        return res

    
    def swap_network_appliance_warm_spare(self, request: operations.SwapNetworkApplianceWarmSpareRequest) -> operations.SwapNetworkApplianceWarmSpareResponse:
        r"""Swap MX primary and warm spare appliances
        Swap MX primary and warm spare appliances
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare/swap", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SwapNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.swap_network_appliance_warm_spare_200_application_json_object = out

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

    
    def update_network_appliance_content_filtering(self, request: operations.UpdateNetworkApplianceContentFilteringRequest) -> operations.UpdateNetworkApplianceContentFilteringResponse:
        r"""Update the content filtering settings for an MX network
        Update the content filtering settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/contentFiltering", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceContentFilteringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_content_filtering_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_cellular_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse:
        r"""Update the cellular firewall rules of an MX network
        Update the cellular firewall rules of an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/cellularFirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_cellular_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_firewalled_service(self, request: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest) -> operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse:
        r"""Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/firewalledServices/{service}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_firewalled_service_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_inbound_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse:
        r"""Update the inbound firewall rules of an MX network
        Update the inbound firewall rules of an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/inboundFirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_inbound_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_l3_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse:
        r"""Update the L3 firewall rules of an MX network
        Update the L3 firewall rules of an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l3FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_l3_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_l7_firewall_rules(self, request: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest) -> operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse:
        r"""Update the MX L7 firewall rules for an MX network
        Update the MX L7 firewall rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_l7_firewall_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_one_to_many_nat_rules(self, request: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest) -> operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse:
        r"""Set the 1:Many NAT mapping rules for an MX network
        Set the 1:Many NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToManyNatRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_one_to_one_nat_rules(self, request: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest) -> operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse:
        r"""Set the 1:1 NAT mapping rules for an MX network
        Set the 1:1 NAT mapping rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/oneToOneNatRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_firewall_port_forwarding_rules(self, request: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest) -> operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse:
        r"""Update the port forwarding rules for an MX network
        Update the port forwarding rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_firewall_port_forwarding_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_port(self, request: operations.UpdateNetworkAppliancePortRequest) -> operations.UpdateNetworkAppliancePortResponse:
        r"""Update the per-port VLAN settings for a single MX port.
        Update the per-port VLAN settings for a single MX port.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkAppliancePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_port_200_application_json_object = out

        return res

    
    def update_network_appliance_security_intrusion(self, request: operations.UpdateNetworkApplianceSecurityIntrusionRequest) -> operations.UpdateNetworkApplianceSecurityIntrusionResponse:
        r"""Set the supported intrusion settings for an MX network
        Set the supported intrusion settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/intrusion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def update_network_appliance_security_malware(self, request: operations.UpdateNetworkApplianceSecurityMalwareRequest) -> operations.UpdateNetworkApplianceSecurityMalwareResponse:
        r"""Set the supported malware settings for an MX network
        Set the supported malware settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/security/malware", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSecurityMalwareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_security_malware_200_application_json_object = out

        return res

    
    def update_network_appliance_single_lan(self, request: operations.UpdateNetworkApplianceSingleLanRequest) -> operations.UpdateNetworkApplianceSingleLanResponse:
        r"""Update single LAN configuration
        Update single LAN configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/singleLan", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceSingleLanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_single_lan_200_application_json_object = out

        return res

    
    def update_network_appliance_static_route(self, request: operations.UpdateNetworkApplianceStaticRouteRequest) -> operations.UpdateNetworkApplianceStaticRouteResponse:
        r"""Update a static route for an MX or teleworker network
        Update a static route for an MX or teleworker network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_static_route_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping(self, request: operations.UpdateNetworkApplianceTrafficShapingRequest) -> operations.UpdateNetworkApplianceTrafficShapingResponse:
        r"""Update the traffic shaping settings for an MX network
        Update the traffic shaping settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_custom_performance_class(self, request: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest) -> operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
        r"""Update a custom performance class for an MX network
        Update a custom performance class for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_rules(self, request: operations.UpdateNetworkApplianceTrafficShapingRulesRequest) -> operations.UpdateNetworkApplianceTrafficShapingRulesResponse:
        r"""Update the traffic shaping settings rules for an MX network
        Update the traffic shaping settings rules for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_rules_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_uplink_bandwidth(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
        r"""Updates the uplink bandwidth settings for your MX network.
        Updates the uplink bandwidth settings for your MX network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkBandwidth", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object = out

        return res

    
    def update_network_appliance_traffic_shaping_uplink_selection(self, request: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest) -> operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse:
        r"""Update uplink selection settings for an MX network
        Update uplink selection settings for an MX network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/trafficShaping/uplinkSelection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_traffic_shaping_uplink_selection_200_application_json_object = out

        return res

    
    def update_network_appliance_vlan(self, request: operations.UpdateNetworkApplianceVlanRequest) -> operations.UpdateNetworkApplianceVlanResponse:
        r"""Update a VLAN
        Update a VLAN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/{vlanId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlan_200_application_json_object = out

        return res

    
    def update_network_appliance_vlans_settings(self, request: operations.UpdateNetworkApplianceVlansSettingsRequest) -> operations.UpdateNetworkApplianceVlansSettingsResponse:
        r"""Enable/Disable VLANs for the given network
        Enable/Disable VLANs for the given network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vlans/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVlansSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vlans_settings_200_application_json_object = out

        return res

    
    def update_network_appliance_vpn_bgp(self, request: operations.UpdateNetworkApplianceVpnBgpRequest) -> operations.UpdateNetworkApplianceVpnBgpResponse:
        r"""Update a Hub BGP Configuration
        Update a Hub BGP Configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/bgp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVpnBgpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vpn_bgp_200_application_json_object = out

        return res

    
    def update_network_appliance_vpn_site_to_site_vpn(self, request: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest) -> operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse:
        r"""Update the site-to-site VPN settings of a network
        Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/vpn/siteToSiteVpn", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_vpn_site_to_site_vpn_200_application_json_object = out

        return res

    
    def update_network_appliance_warm_spare(self, request: operations.UpdateNetworkApplianceWarmSpareRequest) -> operations.UpdateNetworkApplianceWarmSpareResponse:
        r"""Update MX warm spare settings
        Update MX warm spare settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/appliance/warmSpare", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkApplianceWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_appliance_warm_spare_200_application_json_object = out

        return res

    
    def update_organization_appliance_security_intrusion(self, request: operations.UpdateOrganizationApplianceSecurityIntrusionRequest) -> operations.UpdateOrganizationApplianceSecurityIntrusionResponse:
        r"""Sets supported intrusion settings for an organization
        Sets supported intrusion settings for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/security/intrusion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceSecurityIntrusionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_security_intrusion_200_application_json_object = out

        return res

    
    def update_organization_appliance_vpn_third_party_vpn_peers(self, request: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest) -> operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse:
        r"""Update the third party VPN peers for an organization
        Update the third party VPN peers for an organization
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object = out

        return res

    
    def update_organization_appliance_vpn_vpn_firewall_rules(self, request: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest) -> operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse:
        r"""Update the firewall rules of an organization's site-to-site VPN
        Update the firewall rules of an organization's site-to-site VPN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/appliance/vpn/vpnFirewallRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_appliance_vpn_vpn_firewall_rules_200_application_json_object = out

        return res

    