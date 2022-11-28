from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = field(metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody:
    interface_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    multicast_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastGroup') }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams = field()
    request: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_routing_multicast_rendezvous_point_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
