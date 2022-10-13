from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateManagedCredentialPathParams:
    credential_id: int = field(default=None, metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedCredentialSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateManagedCredentialSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateManagedCredentialSecurity:
    option1: Optional[UpdateManagedCredentialSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateManagedCredentialSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateManagedCredentialRequest:
    path_params: UpdateManagedCredentialPathParams = field(default=None)
    request: shared.ManagedCredential = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateManagedCredentialSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateManagedCredentialDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateManagedCredentialResponse:
    content_type: str = field(default=None)
    managed_credential: Optional[shared.ManagedCredential] = field(default=None)
    status_code: int = field(default=None)
    update_managed_credential_default_application_json_object: Optional[UpdateManagedCredentialDefaultApplicationJSON] = field(default=None)
    
