from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ResetLinodePasswordPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResetLinodePasswordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ResetLinodePasswordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResetLinodePasswordSecurity:
    option1: Optional[ResetLinodePasswordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ResetLinodePasswordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ResetLinodePasswordRequest:
    path_params: ResetLinodePasswordPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ResetLinodePasswordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ResetLinodePasswordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ResetLinodePasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reset_linode_password_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    reset_linode_password_default_application_json_object: Optional[ResetLinodePasswordDefaultApplicationJSON] = field(default=None)
    
