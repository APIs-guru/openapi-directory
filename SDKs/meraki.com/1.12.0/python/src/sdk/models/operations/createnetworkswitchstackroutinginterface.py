from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchStackRoutingInterfacePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings:
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    is_passive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPassiveEnabled' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequestBody:
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultGateway' }})
    interface_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIp' }})
    multicast_routing: Optional[CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastRouting' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ospf_settings: Optional[CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ospfSettings' }})
    subnet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    vlan_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass
class CreateNetworkSwitchStackRoutingInterfaceRequest:
    path_params: CreateNetworkSwitchStackRoutingInterfacePathParams = field(default=None)
    request: CreateNetworkSwitchStackRoutingInterfaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_stack_routing_interface_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
