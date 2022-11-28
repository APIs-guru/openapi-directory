from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPersonalAccessTokenPathParams:
    token_id: int = field(metadata={'path_param': { 'field_name': 'tokenId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonalAccessTokenSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetPersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetPersonalAccessTokenRequest:
    path_params: GetPersonalAccessTokenPathParams = field()
    security: GetPersonalAccessTokenSecurity = field()
    

@dataclass
class GetPersonalAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    personal_access_token: Optional[shared.PersonalAccessToken] = field(default=None)
    get_personal_access_token_default_application_json_object: Optional[GetPersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
