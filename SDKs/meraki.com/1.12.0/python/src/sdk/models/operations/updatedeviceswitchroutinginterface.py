from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceSwitchRoutingInterfacePathParams:
    interface_id: str = field(default=None, metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings:
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    is_passive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPassiveEnabled' }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchRoutingInterfaceRequestBody:
    interface_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIp' }})
    multicast_routing: Optional[UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastRouting' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ospf_settings: Optional[UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ospfSettings' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass
class UpdateDeviceSwitchRoutingInterfaceRequest:
    path_params: UpdateDeviceSwitchRoutingInterfacePathParams = field(default=None)
    request: Optional[UpdateDeviceSwitchRoutingInterfaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_switch_routing_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
