from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_FIREWALL_DEVICE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallDevicePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallDeviceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetFirewallDeviceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFirewallDeviceSecurity:
    option1: Optional[GetFirewallDeviceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFirewallDeviceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFirewallDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetFirewallDevicePathParams = field(default=None)
    security: GetFirewallDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewallDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetFirewallDeviceResponse:
    content_type: str = field(default=None)
    firewall_devices: Optional[shared.FirewallDevices] = field(default=None)
    status_code: int = field(default=None)
    get_firewall_device_default_application_json_object: Optional[GetFirewallDeviceDefaultApplicationJSON] = field(default=None)
    
