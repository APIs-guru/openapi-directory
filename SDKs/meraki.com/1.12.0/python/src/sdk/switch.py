import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Switch:
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

    
    def add_network_switch_stack(self, request: operations.AddNetworkSwitchStackRequest) -> operations.AddNetworkSwitchStackResponse:
        r"""Add a switch to a stack
        Add a switch to a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/add", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.add_network_switch_stack_200_application_json_object = out

        return res

    
    def clone_organization_switch_devices(self, request: operations.CloneOrganizationSwitchDevicesRequest) -> operations.CloneOrganizationSwitchDevicesResponse:
        r"""Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
        Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/switch/devices/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneOrganizationSwitchDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.clone_organization_switch_devices_200_application_json_object = out

        return res

    
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

    
    def create_network_switch_access_policy(self, request: operations.CreateNetworkSwitchAccessPolicyRequest) -> operations.CreateNetworkSwitchAccessPolicyResponse:
        r"""Create an access policy for a switch network
        Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_access_policy_201_application_json_object = out

        return res

    
    def create_network_switch_link_aggregation(self, request: operations.CreateNetworkSwitchLinkAggregationRequest) -> operations.CreateNetworkSwitchLinkAggregationResponse:
        r"""Create a link aggregation group
        Create a link aggregation group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_link_aggregation_201_application_json_object = out

        return res

    
    def create_network_switch_port_schedule(self, request: operations.CreateNetworkSwitchPortScheduleRequest) -> operations.CreateNetworkSwitchPortScheduleResponse:
        r"""Add a switch port schedule
        Add a switch port schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_port_schedule_201_application_json_object = out

        return res

    
    def create_network_switch_qos_rule(self, request: operations.CreateNetworkSwitchQosRuleRequest) -> operations.CreateNetworkSwitchQosRuleResponse:
        r"""Add a quality of service rule
        Add a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_qos_rule_201_application_json_object = out

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

    
    def create_network_switch_stack(self, request: operations.CreateNetworkSwitchStackRequest) -> operations.CreateNetworkSwitchStackResponse:
        r"""Create a stack
        Create a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_switch_stack_201_application_json_object = out

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

    
    def cycle_device_switch_ports(self, request: operations.CycleDeviceSwitchPortsRequest) -> operations.CycleDeviceSwitchPortsResponse:
        r"""Cycle a set of switch ports
        Cycle a set of switch ports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/cycle", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CycleDeviceSwitchPortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cycle_device_switch_ports_200_application_json_object = out

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

    
    def delete_network_switch_access_policy(self, request: operations.DeleteNetworkSwitchAccessPolicyRequest) -> operations.DeleteNetworkSwitchAccessPolicyResponse:
        r"""Delete an access policy for a switch network
        Delete an access policy for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_link_aggregation(self, request: operations.DeleteNetworkSwitchLinkAggregationRequest) -> operations.DeleteNetworkSwitchLinkAggregationResponse:
        r"""Split a link aggregation group into separate ports
        Split a link aggregation group into separate ports
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_port_schedule(self, request: operations.DeleteNetworkSwitchPortScheduleRequest) -> operations.DeleteNetworkSwitchPortScheduleResponse:
        r"""Delete a switch port schedule
        Delete a switch port schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_network_switch_qos_rule(self, request: operations.DeleteNetworkSwitchQosRuleRequest) -> operations.DeleteNetworkSwitchQosRuleResponse:
        r"""Delete a quality of service rule
        Delete a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_network_switch_stack(self, request: operations.DeleteNetworkSwitchStackRequest) -> operations.DeleteNetworkSwitchStackResponse:
        r"""Delete a stack
        Delete a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_device_switch_port(self, request: operations.GetDeviceSwitchPortRequest) -> operations.GetDeviceSwitchPortResponse:
        r"""Return a switch port
        Return a switch port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_port_200_application_json_object = out

        return res

    
    def get_device_switch_ports(self, request: operations.GetDeviceSwitchPortsRequest) -> operations.GetDeviceSwitchPortsResponse:
        r"""List the switch ports for a switch
        List the switch ports for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_200_application_json_object = out

        return res

    
    def get_device_switch_ports_statuses(self, request: operations.GetDeviceSwitchPortsStatusesRequest) -> operations.GetDeviceSwitchPortsStatusesResponse:
        r"""Return the status for all the ports of a switch
        Return the status for all the ports of a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_200_application_json_object = out

        return res

    
    def get_device_switch_ports_statuses_packets(self, request: operations.GetDeviceSwitchPortsStatusesPacketsRequest) -> operations.GetDeviceSwitchPortsStatusesPacketsResponse:
        r"""Return the packet counters for all the ports of a switch
        Return the packet counters for all the ports of a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/statuses/packets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchPortsStatusesPacketsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_ports_statuses_packets_200_application_json_object = out

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

    
    def get_device_switch_warm_spare(self, request: operations.GetDeviceSwitchWarmSpareRequest) -> operations.GetDeviceSwitchWarmSpareResponse:
        r"""Return warm spare configuration for a switch
        Return warm spare configuration for a switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_device_switch_warm_spare_200_application_json_object = out

        return res

    
    def get_network_switch_access_control_lists(self, request: operations.GetNetworkSwitchAccessControlListsRequest) -> operations.GetNetworkSwitchAccessControlListsResponse:
        r"""Return the access control lists for a MS network
        Return the access control lists for a MS network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessControlLists", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessControlListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_control_lists_200_application_json_object = out

        return res

    
    def get_network_switch_access_policies(self, request: operations.GetNetworkSwitchAccessPoliciesRequest) -> operations.GetNetworkSwitchAccessPoliciesResponse:
        r"""List the access policies for a switch network
        List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policies_200_application_json_object = out

        return res

    
    def get_network_switch_access_policy(self, request: operations.GetNetworkSwitchAccessPolicyRequest) -> operations.GetNetworkSwitchAccessPolicyResponse:
        r"""Return a specific access policy for a switch network
        Return a specific access policy for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_access_policy_200_application_json_object = out

        return res

    
    def get_network_switch_alternate_management_interface(self, request: operations.GetNetworkSwitchAlternateManagementInterfaceRequest) -> operations.GetNetworkSwitchAlternateManagementInterfaceResponse:
        r"""Return the switch alternate management interface for the network
        Return the switch alternate management interface for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/alternateManagementInterface", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_alternate_management_interface_200_application_json_object = out

        return res

    
    def get_network_switch_dhcp_server_policy(self, request: operations.GetNetworkSwitchDhcpServerPolicyRequest) -> operations.GetNetworkSwitchDhcpServerPolicyResponse:
        r"""Return the DHCP server policy
        Return the DHCP server policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dhcpServerPolicy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchDhcpServerPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_dhcp_server_policy_200_application_json_object = out

        return res

    
    def get_network_switch_dscp_to_cos_mappings(self, request: operations.GetNetworkSwitchDscpToCosMappingsRequest) -> operations.GetNetworkSwitchDscpToCosMappingsResponse:
        r"""Return the DSCP to CoS mappings
        Return the DSCP to CoS mappings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dscpToCosMappings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchDscpToCosMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_dscp_to_cos_mappings_200_application_json_object = out

        return res

    
    def get_network_switch_link_aggregations(self, request: operations.GetNetworkSwitchLinkAggregationsRequest) -> operations.GetNetworkSwitchLinkAggregationsResponse:
        r"""List link aggregation groups
        List link aggregation groups
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchLinkAggregationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_link_aggregations_200_application_json_object = out

        return res

    
    def get_network_switch_mtu(self, request: operations.GetNetworkSwitchMtuRequest) -> operations.GetNetworkSwitchMtuResponse:
        r"""Return the MTU configuration
        Return the MTU configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/mtu", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchMtuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_mtu_200_application_json_object = out

        return res

    
    def get_network_switch_port_schedules(self, request: operations.GetNetworkSwitchPortSchedulesRequest) -> operations.GetNetworkSwitchPortSchedulesResponse:
        r"""List switch port schedules
        List switch port schedules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchPortSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_port_schedules_200_application_json_object = out

        return res

    
    def get_network_switch_qos_rule(self, request: operations.GetNetworkSwitchQosRuleRequest) -> operations.GetNetworkSwitchQosRuleResponse:
        r"""Return a quality of service rule
        Return a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rule_200_application_json_object = out

        return res

    
    def get_network_switch_qos_rules(self, request: operations.GetNetworkSwitchQosRulesRequest) -> operations.GetNetworkSwitchQosRulesResponse:
        r"""List quality of service rules
        List quality of service rules
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rules_200_application_json_object = out

        return res

    
    def get_network_switch_qos_rules_order(self, request: operations.GetNetworkSwitchQosRulesOrderRequest) -> operations.GetNetworkSwitchQosRulesOrderResponse:
        r"""Return the quality of service rule IDs by order in which they will be processed by the switch
        Return the quality of service rule IDs by order in which they will be processed by the switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/order", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchQosRulesOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_qos_rules_order_200_application_json_object = out

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

    
    def get_network_switch_settings(self, request: operations.GetNetworkSwitchSettingsRequest) -> operations.GetNetworkSwitchSettingsResponse:
        r"""Returns the switch network settings
        Returns the switch network settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_settings_200_application_json_object = out

        return res

    
    def get_network_switch_stack(self, request: operations.GetNetworkSwitchStackRequest) -> operations.GetNetworkSwitchStackResponse:
        r"""Show a switch stack
        Show a switch stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stack_200_application_json_object = out

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

    
    def get_network_switch_stacks(self, request: operations.GetNetworkSwitchStacksRequest) -> operations.GetNetworkSwitchStacksResponse:
        r"""List the switch stacks in a network
        List the switch stacks in a network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStacksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stacks_200_application_json_object = out

        return res

    
    def get_network_switch_storm_control(self, request: operations.GetNetworkSwitchStormControlRequest) -> operations.GetNetworkSwitchStormControlResponse:
        r"""Return the storm control configuration for a switch network
        Return the storm control configuration for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stormControl", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStormControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_storm_control_200_application_json_object = out

        return res

    
    def get_network_switch_stp(self, request: operations.GetNetworkSwitchStpRequest) -> operations.GetNetworkSwitchStpResponse:
        r"""Returns STP settings
        Returns STP settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSwitchStpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_switch_stp_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profile_port(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortResponse:
        r"""Return a switch profile port
        Return a switch profile port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profile_ports(self, request: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse:
        r"""Return all the ports of a switch profile
        Return all the ports of a switch profile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profile_ports_200_application_json_object = out

        return res

    
    def get_organization_config_template_switch_profiles(self, request: operations.GetOrganizationConfigTemplateSwitchProfilesRequest) -> operations.GetOrganizationConfigTemplateSwitchProfilesResponse:
        r"""List the switch profiles for your switch template configuration
        List the switch profiles for your switch template configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationConfigTemplateSwitchProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_organization_config_template_switch_profiles_200_application_json_object = out

        return res

    
    def remove_network_switch_stack(self, request: operations.RemoveNetworkSwitchStackRequest) -> operations.RemoveNetworkSwitchStackResponse:
        r"""Remove a switch from a stack
        Remove a switch from a stack
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stacks/{switchStackId}/remove", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveNetworkSwitchStackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.remove_network_switch_stack_200_application_json_object = out

        return res

    
    def update_device_switch_port(self, request: operations.UpdateDeviceSwitchPortRequest) -> operations.UpdateDeviceSwitchPortResponse:
        r"""Update a switch port
        Update a switch port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchPortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_port_200_application_json_object = out

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

    
    def update_device_switch_warm_spare(self, request: operations.UpdateDeviceSwitchWarmSpareRequest) -> operations.UpdateDeviceSwitchWarmSpareResponse:
        r"""Update warm spare configuration for a switch
        Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/devices/{serial}/switch/warmSpare", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeviceSwitchWarmSpareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_device_switch_warm_spare_200_application_json_object = out

        return res

    
    def update_network_switch_access_control_lists(self, request: operations.UpdateNetworkSwitchAccessControlListsRequest) -> operations.UpdateNetworkSwitchAccessControlListsResponse:
        r"""Update the access control lists for a MS network
        Update the access control lists for a MS network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessControlLists", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessControlListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_control_lists_200_application_json_object = out

        return res

    
    def update_network_switch_access_policy(self, request: operations.UpdateNetworkSwitchAccessPolicyRequest) -> operations.UpdateNetworkSwitchAccessPolicyResponse:
        r"""Update an access policy for a switch network
        Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAccessPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_access_policy_200_application_json_object = out

        return res

    
    def update_network_switch_alternate_management_interface(self, request: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest) -> operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse:
        r"""Update the switch alternate management interface for the network
        Update the switch alternate management interface for the network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/alternateManagementInterface", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_alternate_management_interface_200_application_json_object = out

        return res

    
    def update_network_switch_dhcp_server_policy(self, request: operations.UpdateNetworkSwitchDhcpServerPolicyRequest) -> operations.UpdateNetworkSwitchDhcpServerPolicyResponse:
        r"""Update the DHCP server policy
        Update the DHCP server policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dhcpServerPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchDhcpServerPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_dhcp_server_policy_200_application_json_object = out

        return res

    
    def update_network_switch_dscp_to_cos_mappings(self, request: operations.UpdateNetworkSwitchDscpToCosMappingsRequest) -> operations.UpdateNetworkSwitchDscpToCosMappingsResponse:
        r"""Update the DSCP to CoS mappings
        Update the DSCP to CoS mappings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/dscpToCosMappings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchDscpToCosMappingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_dscp_to_cos_mappings_200_application_json_object = out

        return res

    
    def update_network_switch_link_aggregation(self, request: operations.UpdateNetworkSwitchLinkAggregationRequest) -> operations.UpdateNetworkSwitchLinkAggregationResponse:
        r"""Update a link aggregation group
        Update a link aggregation group
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchLinkAggregationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_link_aggregation_200_application_json_object = out

        return res

    
    def update_network_switch_mtu(self, request: operations.UpdateNetworkSwitchMtuRequest) -> operations.UpdateNetworkSwitchMtuResponse:
        r"""Update the MTU configuration
        Update the MTU configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/mtu", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchMtuResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_mtu_200_application_json_object = out

        return res

    
    def update_network_switch_port_schedule(self, request: operations.UpdateNetworkSwitchPortScheduleRequest) -> operations.UpdateNetworkSwitchPortScheduleResponse:
        r"""Update a switch port schedule
        Update a switch port schedule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchPortScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_port_schedule_200_application_json_object = out

        return res

    
    def update_network_switch_qos_rule(self, request: operations.UpdateNetworkSwitchQosRuleRequest) -> operations.UpdateNetworkSwitchQosRuleResponse:
        r"""Update a quality of service rule
        Update a quality of service rule
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchQosRuleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_qos_rule_200_application_json_object = out

        return res

    
    def update_network_switch_qos_rules_order(self, request: operations.UpdateNetworkSwitchQosRulesOrderRequest) -> operations.UpdateNetworkSwitchQosRulesOrderResponse:
        r"""Update the order in which the rules should be processed by the switch
        Update the order in which the rules should be processed by the switch
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/qosRules/order", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchQosRulesOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_qos_rules_order_200_application_json_object = out

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

    
    def update_network_switch_settings(self, request: operations.UpdateNetworkSwitchSettingsRequest) -> operations.UpdateNetworkSwitchSettingsResponse:
        r"""Update switch network settings
        Update switch network settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/settings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_settings_200_application_json_object = out

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

    
    def update_network_switch_storm_control(self, request: operations.UpdateNetworkSwitchStormControlRequest) -> operations.UpdateNetworkSwitchStormControlResponse:
        r"""Update the storm control configuration for a switch network
        Update the storm control configuration for a switch network
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stormControl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStormControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_storm_control_200_application_json_object = out

        return res

    
    def update_network_switch_stp(self, request: operations.UpdateNetworkSwitchStpRequest) -> operations.UpdateNetworkSwitchStpResponse:
        r"""Updates STP settings
        Updates STP settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/switch/stp", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkSwitchStpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_switch_stp_200_application_json_object = out

        return res

    
    def update_organization_config_template_switch_profile_port(self, request: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest) -> operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse:
        r"""Update a switch profile port
        Update a switch profile port
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_organization_config_template_switch_profile_port_200_application_json_object = out

        return res

    