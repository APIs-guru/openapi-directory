from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePersonalAccessTokenSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreatePersonalAccessTokenSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePersonalAccessTokenSecurity:
    option1: Optional[CreatePersonalAccessTokenSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreatePersonalAccessTokenSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreatePersonalAccessTokenRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePersonalAccessTokenSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreatePersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreatePersonalAccessTokenResponse:
    content_type: str = field(default=None)
    personal_access_token: Optional[shared.PersonalAccessToken] = field(default=None)
    status_code: int = field(default=None)
    create_personal_access_token_default_application_json_object: Optional[CreatePersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
