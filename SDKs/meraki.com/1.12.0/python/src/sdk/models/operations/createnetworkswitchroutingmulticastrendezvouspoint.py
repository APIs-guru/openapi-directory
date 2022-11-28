from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody:
    interface_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    multicast_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastGroup') }})
    

@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams = field()
    request: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_routing_multicast_rendezvous_point_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
