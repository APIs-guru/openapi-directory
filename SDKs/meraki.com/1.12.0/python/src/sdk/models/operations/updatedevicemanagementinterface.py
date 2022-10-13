from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceManagementInterfacePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    NOT_CONFIGURED = "not configured"


@dataclass_json
@dataclass
class UpdateDeviceManagementInterfaceRequestBodyWan1:
    static_dns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticDns' }})
    static_gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticGatewayIp' }})
    static_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIp' }})
    static_subnet_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticSubnetMask' }})
    using_static_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usingStaticIp' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    wan_enabled: Optional[UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wanEnabled' }})
    
class UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    NOT_CONFIGURED = "not configured"


@dataclass_json
@dataclass
class UpdateDeviceManagementInterfaceRequestBodyWan2:
    static_dns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticDns' }})
    static_gateway_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticGatewayIp' }})
    static_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticIp' }})
    static_subnet_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticSubnetMask' }})
    using_static_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usingStaticIp' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    wan_enabled: Optional[UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wanEnabled' }})
    

@dataclass_json
@dataclass
class UpdateDeviceManagementInterfaceRequestBody:
    wan1: Optional[UpdateDeviceManagementInterfaceRequestBodyWan1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wan1' }})
    wan2: Optional[UpdateDeviceManagementInterfaceRequestBodyWan2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wan2' }})
    

@dataclass
class UpdateDeviceManagementInterfaceRequest:
    path_params: UpdateDeviceManagementInterfacePathParams = field(default=None)
    request: Optional[UpdateDeviceManagementInterfaceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceManagementInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
