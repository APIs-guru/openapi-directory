from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_FIREWALL_DEVICES_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallDevicesPathParams:
    firewall_id: int = field(metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallDevicesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFirewallDevicesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetFirewallDevices200ApplicationJSON:
    data: Optional[List[shared.FirewallDevices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetFirewallDevicesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetFirewallDevicesRequest:
    path_params: GetFirewallDevicesPathParams = field()
    query_params: GetFirewallDevicesQueryParams = field()
    security: GetFirewallDevicesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetFirewallDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    get_firewall_devices_200_application_json_object: Optional[GetFirewallDevices200ApplicationJSON] = field(default=None)
    get_firewall_devices_default_application_json_object: Optional[GetFirewallDevicesDefaultApplicationJSON] = field(default=None)
    
