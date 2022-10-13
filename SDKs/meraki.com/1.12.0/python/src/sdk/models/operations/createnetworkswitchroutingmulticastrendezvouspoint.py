from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody:
    interface_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIp' }})
    multicast_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastGroup' }})
    

@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams = field(default=None)
    request: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_routing_multicast_rendezvous_point_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
