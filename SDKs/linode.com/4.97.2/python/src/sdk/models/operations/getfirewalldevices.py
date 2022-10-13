from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_FIREWALL_DEVICES_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallDevicesPathParams:
    firewall_id: int = field(default=None, metadata={'path_param': { 'field_name': 'firewallId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallDevicesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFirewallDevicesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetFirewallDevicesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFirewallDevicesSecurity:
    option1: Optional[GetFirewallDevicesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFirewallDevicesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFirewallDevicesRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetFirewallDevicesPathParams = field(default=None)
    query_params: GetFirewallDevicesQueryParams = field(default=None)
    security: GetFirewallDevicesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewallDevices200ApplicationJSON:
    data: Optional[List[shared.FirewallDevices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetFirewallDevicesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetFirewallDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_firewall_devices_200_application_json_object: Optional[GetFirewallDevices200ApplicationJSON] = field(default=None)
    get_firewall_devices_default_application_json_object: Optional[GetFirewallDevicesDefaultApplicationJSON] = field(default=None)
    
