from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeFirewallsPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeFirewallsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLinodeFirewallsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeFirewallsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeFirewallsSecurity:
    option1: Optional[GetLinodeFirewallsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeFirewallsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeFirewallsRequest:
    path_params: GetLinodeFirewallsPathParams = field(default=None)
    query_params: GetLinodeFirewallsQueryParams = field(default=None)
    security: GetLinodeFirewallsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeFirewalls200ApplicationJSON:
    data: Optional[List[shared.Firewall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetLinodeFirewallsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeFirewallsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_linode_firewalls_200_application_json_object: Optional[GetLinodeFirewalls200ApplicationJSON] = field(default=None)
    get_linode_firewalls_default_application_json_object: Optional[GetLinodeFirewallsDefaultApplicationJSON] = field(default=None)
    
