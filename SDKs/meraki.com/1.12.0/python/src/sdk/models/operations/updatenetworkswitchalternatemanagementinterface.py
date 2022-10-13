from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchAlternateManagementInterfacePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum(str, Enum):
    RADIUS = "radius"
    SNMP = "snmp"
    SYSLOG = "syslog"


@dataclass_json
@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches:
    alternate_management_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateManagementIp' }})
    serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    protocols: Optional[List[UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    switches: Optional[List[UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switches' }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceRequest:
    path_params: UpdateNetworkSwitchAlternateManagementInterfacePathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchAlternateManagementInterfaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchAlternateManagementInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
