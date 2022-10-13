from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeletePersonalAccessTokenPathParams:
    token_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tokenId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePersonalAccessTokenSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeletePersonalAccessTokenSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePersonalAccessTokenSecurity:
    option1: Optional[DeletePersonalAccessTokenSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeletePersonalAccessTokenSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeletePersonalAccessTokenRequest:
    path_params: DeletePersonalAccessTokenPathParams = field(default=None)
    security: DeletePersonalAccessTokenSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeletePersonalAccessTokenDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeletePersonalAccessTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_personal_access_token_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_personal_access_token_default_application_json_object: Optional[DeletePersonalAccessTokenDefaultApplicationJSON] = field(default=None)
    
