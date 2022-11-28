from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateDeviceSwitchRoutingInterfacePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclass
class CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings:
    r"""CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
    The OSPF routing settings of the interface.
    """
    
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    is_passive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPassiveEnabled') }})
    

@dataclass_json
@dataclass
class CreateDeviceSwitchRoutingInterfaceRequestBody:
    interface_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    vlan_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    multicast_routing: Optional[CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastRouting') }})
    ospf_settings: Optional[CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ospfSettings') }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    

@dataclass
class CreateDeviceSwitchRoutingInterfaceRequest:
    path_params: CreateDeviceSwitchRoutingInterfacePathParams = field()
    request: CreateDeviceSwitchRoutingInterfaceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeviceSwitchRoutingInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    create_device_switch_routing_interface_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
