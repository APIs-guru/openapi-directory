from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchRoutingOspfPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchRoutingOspfRequest:
    path_params: GetNetworkSwitchRoutingOspfPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchRoutingOspfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_routing_ospf_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
