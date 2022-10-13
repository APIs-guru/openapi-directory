from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateDeviceSwitchRoutingInterfacePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclass
class CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings:
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    is_passive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPassiveEnabled' }})
    

@dataclass_json
@dataclass
class CreateDeviceSwitchRoutingInterfaceRequestBody:
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultGateway' }})
    interface_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIp' }})
    multicast_routing: Optional[CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastRouting' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ospf_settings: Optional[CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ospfSettings' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    vlan_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass
class CreateDeviceSwitchRoutingInterfaceRequest:
    path_params: CreateDeviceSwitchRoutingInterfacePathParams = field(default=None)
    request: CreateDeviceSwitchRoutingInterfaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_device_switch_routing_interface_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
