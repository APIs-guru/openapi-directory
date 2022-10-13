from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: GetNetworkSwitchRoutingMulticastRendezvousPointPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_routing_multicast_rendezvous_point_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
