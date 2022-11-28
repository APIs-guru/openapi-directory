from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchStackRoutingInterfacePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings:
    r"""CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings
    The OSPF routing settings of the interface.
    """
    
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area') }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    is_passive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPassiveEnabled') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequestBody:
    interface_ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interfaceIp') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    subnet: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnet') }})
    vlan_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGateway') }})
    multicast_routing: Optional[CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastRouting') }})
    ospf_settings: Optional[CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ospfSettings') }})
    

@dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequest:
    path_params: CreateNetworkSwitchStackRoutingInterfacePathParams = field()
    request: CreateNetworkSwitchStackRoutingInterfaceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_stack_routing_interface_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
