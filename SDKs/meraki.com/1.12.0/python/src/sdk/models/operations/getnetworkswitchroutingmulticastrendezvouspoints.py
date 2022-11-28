from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest:
    path_params: GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams = field()
    

@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_routing_multicast_rendezvous_points_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
