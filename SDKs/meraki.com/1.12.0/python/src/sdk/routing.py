import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Routing:
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

    
    def create_device_switch_routing_interface(self, request: operations.CreateDeviceSwitchRoutingInterfaceRequest) -> operations.CreateDeviceSwitchRoutingInterfaceResponse:
        r"""Create a layer 3 interface for a switch
        Create a layer 3 interface for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_interface_201_application_json_object = out

        return res

    
    def create_device_switch_routing_static_route(self, request: operations.CreateDeviceSwitchRoutingStaticRouteRequest) -> operations.CreateDeviceSwitchRoutingStaticRouteResponse:
        r"""Create a layer 3 static route for a switch
        Create a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_device_switch_routing_static_route_201_application_json_object = out

        return res

    
    def create_network_switch_routing_multicast_rendezvous_point(self, request: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Create a multicast rendezvous point
        Create a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_routing_multicast_rendezvous_point_201_application_json_object = out

        return res

    
    def create_network_switch_stack_routing_interface(self, request: operations.CreateNetworkSwitchStackRoutingInterfaceRequest) -> operations.CreateNetworkSwitchStackRoutingInterfaceResponse:
        r"""Create a layer 3 interface for a switch stack
        Create a layer 3 interface for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_interface_201_application_json_object = out

        return res

    
    def create_network_switch_stack_routing_static_route(self, request: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.CreateNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Create a layer 3 static route for a switch stack
        Create a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_routing_static_route_201_application_json_object = out

        return res

    
    def delete_device_switch_routing_interface(self, request: operations.DeleteDeviceSwitchRoutingInterfaceRequest) -> operations.DeleteDeviceSwitchRoutingInterfaceResponse:
        r"""Delete a layer 3 interface from the switch
        Delete a layer 3 interface from the switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_device_switch_routing_static_route(self, request: operations.DeleteDeviceSwitchRoutingStaticRouteRequest) -> operations.DeleteDeviceSwitchRoutingStaticRouteResponse:
        r"""Delete a layer 3 static route for a switch
        Delete a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_routing_multicast_rendezvous_point(self, request: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Delete a multicast rendezvous point
        Delete a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack_routing_interface(self, request: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest) -> operations.DeleteNetworkSwitchStackRoutingInterfaceResponse:
        r"""Delete a layer 3 interface from a switch stack
        Delete a layer 3 interface from a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_stack_routing_static_route(self, request: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest) -> operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Delete a layer 3 static route for a switch stack
        Delete a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_device_switch_routing_interface(self, request: operations.GetDeviceSwitchRoutingInterfaceRequest) -> operations.GetDeviceSwitchRoutingInterfaceResponse:
        r"""Return a layer 3 interface for a switch
        Return a layer 3 interface for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interface_200_application_json_object = out

        return res

    
    def get_device_switch_routing_interface_dhcp(self, request: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest) -> operations.GetDeviceSwitchRoutingInterfaceDhcpResponse:
        r"""Return a layer 3 interface DHCP configuration for a switch
        Return a layer 3 interface DHCP configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def get_device_switch_routing_interfaces(self, request: operations.GetDeviceSwitchRoutingInterfacesRequest) -> operations.GetDeviceSwitchRoutingInterfacesResponse:
        r"""List layer 3 interfaces for a switch
        List layer 3 interfaces for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_interfaces_200_application_json_object = out

        return res

    
    def get_device_switch_routing_static_route(self, request: operations.GetDeviceSwitchRoutingStaticRouteRequest) -> operations.GetDeviceSwitchRoutingStaticRouteResponse:
        r"""Return a layer 3 static route for a switch
        Return a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    def get_device_switch_routing_static_routes(self, request: operations.GetDeviceSwitchRoutingStaticRoutesRequest) -> operations.GetDeviceSwitchRoutingStaticRoutesResponse:
        r"""List layer 3 static routes for a switch
        List layer 3 static routes for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_routing_static_routes_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast(self, request: operations.GetNetworkSwitchRoutingMulticastRequest) -> operations.GetNetworkSwitchRoutingMulticastResponse:
        r"""Return multicast settings for a network
        Return multicast settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast_rendezvous_point(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Return a multicast rendezvous point
        Return a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    def get_network_switch_routing_multicast_rendezvous_points(self, request: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest) -> operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
        r"""List multicast rendezvous points
        List multicast rendezvous points
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_multicast_rendezvous_points_200_application_json_object = out

        return res

    
    def get_network_switch_routing_ospf(self, request: operations.GetNetworkSwitchRoutingOspfRequest) -> operations.GetNetworkSwitchRoutingOspfResponse:
        r"""Return layer 3 OSPF routing configuration
        Return layer 3 OSPF routing configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/ospf", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchRoutingOspfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_routing_ospf_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interface(self, request: operations.GetNetworkSwitchStackRoutingInterfaceRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceResponse:
        r"""Return a layer 3 interface from a switch stack
        Return a layer 3 interface from a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interface_dhcp(self, request: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse:
        r"""Return a layer 3 interface DHCP configuration for a switch stack
        Return a layer 3 interface DHCP configuration for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_interfaces(self, request: operations.GetNetworkSwitchStackRoutingInterfacesRequest) -> operations.GetNetworkSwitchStackRoutingInterfacesResponse:
        r"""List layer 3 interfaces for a switch stack
        List layer 3 interfaces for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingInterfacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_interfaces_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_static_route(self, request: operations.GetNetworkSwitchStackRoutingStaticRouteRequest) -> operations.GetNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Return a layer 3 static route for a switch stack
        Return a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    
    def get_network_switch_stack_routing_static_routes(self, request: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest) -> operations.GetNetworkSwitchStackRoutingStaticRoutesResponse:
        r"""List layer 3 static routes for a switch stack
        List layer 3 static routes for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackRoutingStaticRoutesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_routing_static_routes_200_application_json_object = out

        return res

    
    def update_device_switch_routing_interface(self, request: operations.UpdateDeviceSwitchRoutingInterfaceRequest) -> operations.UpdateDeviceSwitchRoutingInterfaceResponse:
        r"""Update a layer 3 interface for a switch
        Update a layer 3 interface for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_interface_200_application_json_object = out

        return res

    
    def update_device_switch_routing_interface_dhcp(self, request: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest) -> operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse:
        r"""Update a layer 3 interface DHCP configuration for a switch
        Update a layer 3 interface DHCP configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def update_device_switch_routing_static_route(self, request: operations.UpdateDeviceSwitchRoutingStaticRouteRequest) -> operations.UpdateDeviceSwitchRoutingStaticRouteResponse:
        r"""Update a layer 3 static route for a switch
        Update a layer 3 static route for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_routing_static_route_200_application_json_object = out

        return res

    
    def update_network_switch_routing_multicast(self, request: operations.UpdateNetworkSwitchRoutingMulticastRequest) -> operations.UpdateNetworkSwitchRoutingMulticastResponse:
        r"""Update multicast settings for a network
        Update multicast settings for a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_200_application_json_object = out

        return res

    
    def update_network_switch_routing_multicast_rendezvous_point(self, request: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest) -> operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
        r"""Update a multicast rendezvous point
        Update a multicast rendezvous point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_multicast_rendezvous_point_200_application_json_object = out

        return res

    
    def update_network_switch_routing_ospf(self, request: operations.UpdateNetworkSwitchRoutingOspfRequest) -> operations.UpdateNetworkSwitchRoutingOspfResponse:
        r"""Update layer 3 OSPF routing configuration
        Update layer 3 OSPF routing configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/routing/ospf", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchRoutingOspfResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_routing_ospf_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_interface(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceResponse:
        r"""Update a layer 3 interface for a switch stack
        Update a layer 3 interface for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_interface_dhcp(self, request: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest) -> operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse:
        r"""Update a layer 3 interface DHCP configuration for a switch stack
        Update a layer 3 interface DHCP configuration for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_interface_dhcp_200_application_json_object = out

        return res

    
    def update_network_switch_stack_routing_static_route(self, request: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest) -> operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse:
        r"""Update a layer 3 static route for a switch stack
        Update a layer 3 static route for a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stack_routing_static_route_200_application_json_object = out

        return res

    