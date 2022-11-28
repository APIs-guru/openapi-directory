from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStackRoutingInterfaceDhcpPathParams:
    interface_id: str = field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStackRoutingInterfaceDhcpRequest:
    path_params: GetNetworkSwitchStackRoutingInterfaceDhcpPathParams = field()
    

@dataclass
class GetNetworkSwitchStackRoutingInterfaceDhcpResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_stack_routing_interface_dhcp_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
