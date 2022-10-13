from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody:
    interface_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIp' }})
    multicast_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastGroup' }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams = field(default=None)
    request: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_routing_multicast_rendezvous_point_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
