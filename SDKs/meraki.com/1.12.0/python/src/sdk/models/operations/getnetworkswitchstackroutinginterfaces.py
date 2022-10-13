from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStackRoutingInterfacesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStackRoutingInterfacesRequest:
    path_params: GetNetworkSwitchStackRoutingInterfacesPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchStackRoutingInterfacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_stack_routing_interfaces_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
