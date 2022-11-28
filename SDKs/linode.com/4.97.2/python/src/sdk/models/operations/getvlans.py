from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
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
class GetVlaNsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetVlaNs200ApplicationJSON:
    data: Optional[List[shared.Vlans]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetVlaNsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetVlaNsRequest:
    query_params: GetVlaNsQueryParams = field()
    security: GetVlaNsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetVlaNsResponse:
    content_type: str = field()
    status_code: int = field()
    get_vla_ns_200_application_json_object: Optional[GetVlaNs200ApplicationJSON] = field(default=None)
    get_vla_ns_default_application_json_object: Optional[GetVlaNsDefaultApplicationJSON] = field(default=None)
    
