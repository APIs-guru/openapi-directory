from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProfileLoginsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProfileLoginsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileLoginsSecurity:
    option1: Optional[GetProfileLoginsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProfileLoginsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProfileLoginsRequest:
    security: GetProfileLoginsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetProfileLogins200ApplicationJSON:
    data: Optional[List[shared.Login]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetProfileLoginsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetProfileLoginsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_profile_logins_200_application_json_object: Optional[GetProfileLogins200ApplicationJSON] = field(default=None)
    get_profile_logins_default_application_json_object: Optional[GetProfileLoginsDefaultApplicationJSON] = field(default=None)
    
