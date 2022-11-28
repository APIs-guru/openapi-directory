from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ResetLinodePasswordPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetLinodePasswordSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ResetLinodePasswordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ResetLinodePasswordRequest:
    path_params: ResetLinodePasswordPathParams = field()
    security: ResetLinodePasswordSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResetLinodePasswordResponse:
    content_type: str = field()
    status_code: int = field()
    reset_linode_password_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    reset_linode_password_default_application_json_object: Optional[ResetLinodePasswordDefaultApplicationJSON] = field(default=None)
    
