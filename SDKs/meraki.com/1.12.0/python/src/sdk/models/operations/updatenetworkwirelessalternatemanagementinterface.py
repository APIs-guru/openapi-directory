from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessAlternateManagementInterfacePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints:
    alternate_management_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateManagementIp' }})
    dns1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns1' }})
    dns2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns2' }})
    gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateway' }})
    serial: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    subnet_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetMask' }})
    
class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum(str, Enum):
    RADIUS = "radius"
    SNMP = "snmp"
    SYSLOG = "syslog"
    LDAP = "ldap"


@dataclass_json
@dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody:
    access_points: Optional[List[UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPoints' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    protocols: Optional[List[UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    vlan_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceRequest:
    path_params: UpdateNetworkWirelessAlternateManagementInterfacePathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessAlternateManagementInterfaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessAlternateManagementInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
