from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest:
    path_params: GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_routing_multicast_rendezvous_points_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
