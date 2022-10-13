from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
DELETE_FIREWALL_DEVICE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class DeleteFirewallDevicePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFirewallDeviceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteFirewallDeviceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFirewallDeviceSecurity:
    option1: Optional[DeleteFirewallDeviceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteFirewallDeviceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteFirewallDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFirewallDevicePathParams = field(default=None)
    security: DeleteFirewallDeviceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteFirewallDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteFirewallDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_firewall_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_firewall_device_default_application_json_object: Optional[DeleteFirewallDeviceDefaultApplicationJSON] = field(default=None)
    
