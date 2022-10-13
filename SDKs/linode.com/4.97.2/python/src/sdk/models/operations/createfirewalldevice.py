from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CREATE_FIREWALL_DEVICE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateFirewallDevicePathParams:
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    
class CreateFirewallDeviceRequestBodyTypeEnum(str, Enum):
    LINODE = "linode"


@dataclass_json
@dataclass
class CreateFirewallDeviceRequestBody:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: CreateFirewallDeviceRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class CreateFirewallDeviceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateFirewallDeviceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFirewallDeviceSecurity:
    option1: Optional[CreateFirewallDeviceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateFirewallDeviceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateFirewallDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateFirewallDevicePathParams = field(default=None)
    request: Optional[CreateFirewallDeviceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFirewallDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateFirewallDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateFirewallDeviceResponse:
    content_type: str = field(default=None)
    firewall_devices: Optional[shared.FirewallDevices] = field(default=None)
    status_code: int = field(default=None)
    create_firewall_device_default_application_json_object: Optional[CreateFirewallDeviceDefaultApplicationJSON] = field(default=None)
    
