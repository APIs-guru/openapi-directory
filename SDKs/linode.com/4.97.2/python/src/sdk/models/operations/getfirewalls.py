from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_FIREWALLS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetFirewallsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFirewallsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetFirewallsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFirewallsSecurity:
    option1: Optional[GetFirewallsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetFirewallsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetFirewallsRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetFirewallsQueryParams = field(default=None)
    security: GetFirewallsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetFirewalls200ApplicationJSON:
    data: Optional[List[shared.Firewall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetFirewallsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetFirewallsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_firewalls_200_application_json_object: Optional[GetFirewalls200ApplicationJSON] = field(default=None)
    get_firewalls_default_application_json_object: Optional[GetFirewallsDefaultApplicationJSON] = field(default=None)
    
