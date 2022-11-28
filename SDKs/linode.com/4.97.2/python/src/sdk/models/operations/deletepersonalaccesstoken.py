from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeletePersonalAccessTokenPathParams:
    token_id: int = field(metadata={'path_param': { 'field_name': 'tokenId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePersonalAccessTokenSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeletePersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeletePersonalAccessTokenRequest:
    path_params: DeletePersonalAccessTokenPathParams = field()
    security: DeletePersonalAccessTokenSecurity = field()
    

@dataclass
class DeletePersonalAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    delete_personal_access_token_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_personal_access_token_default_application_json_object: Optional[DeletePersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
