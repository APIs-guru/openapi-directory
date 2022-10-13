from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPersonalAccessTokenPathParams:
    token_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tokenId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonalAccessTokenSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPersonalAccessTokenSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPersonalAccessTokenSecurity:
    option1: Optional[GetPersonalAccessTokenSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPersonalAccessTokenSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPersonalAccessTokenRequest:
    path_params: GetPersonalAccessTokenPathParams = field(default=None)
    security: GetPersonalAccessTokenSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetPersonalAccessTokenResponse:
    content_type: str = field(default=None)
    personal_access_token: Optional[shared.PersonalAccessToken] = field(default=None)
    status_code: int = field(default=None)
    get_personal_access_token_default_application_json_object: Optional[GetPersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
