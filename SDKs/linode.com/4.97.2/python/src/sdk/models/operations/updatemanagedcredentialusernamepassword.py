from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateManagedCredentialUsernamePasswordPathParams:
    credential_id: int = field(default=None, metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordSecurity:
    option1: Optional[UpdateManagedCredentialUsernamePasswordSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateManagedCredentialUsernamePasswordSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordRequest:
    path_params: UpdateManagedCredentialUsernamePasswordPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateManagedCredentialUsernamePasswordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateManagedCredentialUsernamePasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_managed_credential_username_password_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    update_managed_credential_username_password_default_application_json_object: Optional[UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON] = field(default=None)
    
