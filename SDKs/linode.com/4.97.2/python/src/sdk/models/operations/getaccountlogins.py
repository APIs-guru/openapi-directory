from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAccountLoginsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountLoginsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountLoginsSecurity:
    option1: Optional[GetAccountLoginsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAccountLoginsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAccountLoginsRequest:
    security: GetAccountLoginsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAccountLogins200ApplicationJSON:
    data: Optional[List[shared.Login]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetAccountLoginsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetAccountLoginsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_account_logins_200_application_json_object: Optional[GetAccountLogins200ApplicationJSON] = field(default=None)
    get_account_logins_default_application_json_object: Optional[GetAccountLoginsDefaultApplicationJSON] = field(default=None)
    
