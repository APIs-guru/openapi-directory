from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchRoutingMulticastPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchRoutingMulticastRequest:
    path_params: GetNetworkSwitchRoutingMulticastPathParams = field()
    

@dataclass
class GetNetworkSwitchRoutingMulticastResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_routing_multicast_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
