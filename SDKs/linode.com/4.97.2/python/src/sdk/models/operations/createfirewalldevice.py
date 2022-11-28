from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_FIREWALL_DEVICE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateFirewallDevicePathParams:
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    
class CreateFirewallDeviceRequestBodyTypeEnum(str, Enum):
    LINODE = "linode"


@dataclass_json
@dataclass
class CreateFirewallDeviceRequestBodyInput:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: CreateFirewallDeviceRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class CreateFirewallDeviceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateFirewallDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateFirewallDeviceRequest:
    path_params: CreateFirewallDevicePathParams = field()
    security: CreateFirewallDeviceSecurity = field()
    request: Optional[CreateFirewallDeviceRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateFirewallDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    firewall_devices: Optional[shared.FirewallDevices] = field(default=None)
    create_firewall_device_default_application_json_object: Optional[CreateFirewallDeviceDefaultApplicationJSON] = field(default=None)
    
