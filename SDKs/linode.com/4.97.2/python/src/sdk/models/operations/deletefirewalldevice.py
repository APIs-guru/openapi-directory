from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


DELETE_FIREWALL_DEVICE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class DeleteFirewallDevicePathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFirewallDeviceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteFirewallDeviceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteFirewallDeviceRequest:
    path_params: DeleteFirewallDevicePathParams = field()
    security: DeleteFirewallDeviceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFirewallDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    delete_firewall_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_firewall_device_default_application_json_object: Optional[DeleteFirewallDeviceDefaultApplicationJSON] = field(default=None)
    
