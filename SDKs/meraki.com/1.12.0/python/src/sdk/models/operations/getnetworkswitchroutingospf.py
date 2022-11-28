from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchRoutingOspfPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchRoutingOspfRequest:
    path_params: GetNetworkSwitchRoutingOspfPathParams = field()
    

@dataclass
class GetNetworkSwitchRoutingOspfResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_routing_ospf_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
