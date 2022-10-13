from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdatePersonalAccessTokenPathParams:
    token_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tokenId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePersonalAccessTokenSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdatePersonalAccessTokenSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePersonalAccessTokenSecurity:
    option1: Optional[UpdatePersonalAccessTokenSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdatePersonalAccessTokenSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdatePersonalAccessTokenRequest:
    path_params: UpdatePersonalAccessTokenPathParams = field(default=None)
    request: shared.PersonalAccessToken = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePersonalAccessTokenSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdatePersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdatePersonalAccessTokenResponse:
    content_type: str = field(default=None)
    personal_access_token: Optional[shared.PersonalAccessToken] = field(default=None)
    status_code: int = field(default=None)
    update_personal_access_token_default_application_json_object: Optional[UpdatePersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
