from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingStaticRouteRequestBody:
    advertise_via_ospf_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiseViaOspfEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_hop_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextHopIp') }})
    prefer_over_ospf_routes_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferOverOspfRoutesEnabled') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclass
class UpdateDeviceSwitchRoutingStaticRouteRequest:
    path_params: UpdateDeviceSwitchRoutingStaticRoutePathParams = field()
    request: Optional[UpdateDeviceSwitchRoutingStaticRouteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    update_device_switch_routing_static_route_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
