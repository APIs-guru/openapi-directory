from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDeviceSwitchRoutingStaticRouteRequestBody:
    next_hop_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHopIp') }})
    subnet: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    advertise_via_ospf_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiseViaOspfEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prefer_over_ospf_routes_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferOverOspfRoutesEnabled') }})
    

@dataclass
class CreateDeviceSwitchRoutingStaticRouteRequest:
    path_params: CreateDeviceSwitchRoutingStaticRoutePathParams = field()
    request: CreateDeviceSwitchRoutingStaticRouteRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    create_device_switch_routing_static_route_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
