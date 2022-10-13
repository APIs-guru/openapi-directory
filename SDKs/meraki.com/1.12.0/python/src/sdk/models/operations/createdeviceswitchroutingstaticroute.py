from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDeviceSwitchRoutingStaticRouteRequestBody:
    advertise_via_ospf_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiseViaOspfEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_hop_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextHopIp' }})
    prefer_over_ospf_routes_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferOverOspfRoutesEnabled' }})
    subnet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    

@dataclass
class CreateDeviceSwitchRoutingStaticRouteRequest:
    path_params: CreateDeviceSwitchRoutingStaticRoutePathParams = field(default=None)
    request: CreateDeviceSwitchRoutingStaticRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_device_switch_routing_static_route_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
