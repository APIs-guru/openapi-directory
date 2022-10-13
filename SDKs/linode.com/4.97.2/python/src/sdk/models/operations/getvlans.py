from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_VLA_NS_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
]


@dataclass
class GetVlaNsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVlaNsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVlaNsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVlaNsSecurity:
    option1: Optional[GetVlaNsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetVlaNsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetVlaNsRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetVlaNsQueryParams = field(default=None)
    security: GetVlaNsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetVlaNs200ApplicationJSON:
    data: Optional[List[shared.Vlans]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetVlaNsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetVlaNsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_vla_ns_200_application_json_object: Optional[GetVlaNs200ApplicationJSON] = field(default=None)
    get_vla_ns_default_application_json_object: Optional[GetVlaNsDefaultApplicationJSON] = field(default=None)
    
