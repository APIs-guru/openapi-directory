from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetIPsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetIPsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetIPsSecurity:
    option1: Optional[GetIPsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetIPsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetIPsRequest:
    security: GetIPsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetIPs200ApplicationJSON:
    data: Optional[List[shared.IPAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetIPsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetIPsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_i_ps_200_application_json_object: Optional[GetIPs200ApplicationJSON] = field(default=None)
    get_i_ps_default_application_json_object: Optional[GetIPsDefaultApplicationJSON] = field(default=None)
    
