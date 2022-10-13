from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPersonalAccessTokensSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPersonalAccessTokensSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPersonalAccessTokensSecurity:
    option1: Optional[GetPersonalAccessTokensSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPersonalAccessTokensSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPersonalAccessTokensRequest:
    security: GetPersonalAccessTokensSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPersonalAccessTokens200ApplicationJSON:
    data: Optional[List[shared.PersonalAccessToken]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetPersonalAccessTokensDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetPersonalAccessTokensResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_personal_access_tokens_200_application_json_object: Optional[GetPersonalAccessTokens200ApplicationJSON] = field(default=None)
    get_personal_access_tokens_default_application_json_object: Optional[GetPersonalAccessTokensDefaultApplicationJSON] = field(default=None)
    
