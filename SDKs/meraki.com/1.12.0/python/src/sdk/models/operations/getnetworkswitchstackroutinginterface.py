from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStackRoutingInterfacePathParams:
    interface_id: str = field(metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStackRoutingInterfaceRequest:
    path_params: GetNetworkSwitchStackRoutingInterfacePathParams = field()
    

@dataclass
class GetNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_stack_routing_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
