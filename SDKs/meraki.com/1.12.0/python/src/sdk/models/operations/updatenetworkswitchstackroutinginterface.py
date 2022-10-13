from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchStackRoutingInterfacePathParams:
    interface_id: str = field(default=None, metadata={'path_param': { 'field_name': 'interfaceId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(str, Enum):
    DISABLED = "disabled"
    ENABLED = "enabled"
    IGMP_SNOOPING_QUERIER = "IGMP snooping querier"


@dataclass_json
@dataclass
class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings:
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    is_passive_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPassiveEnabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchStackRoutingInterfaceRequestBody:
    interface_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interfaceIp' }})
    multicast_routing: Optional[UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multicastRouting' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ospf_settings: Optional[UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ospfSettings' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass
class UpdateNetworkSwitchStackRoutingInterfaceRequest:
    path_params: UpdateNetworkSwitchStackRoutingInterfacePathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchStackRoutingInterfaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchStackRoutingInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_stack_routing_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
