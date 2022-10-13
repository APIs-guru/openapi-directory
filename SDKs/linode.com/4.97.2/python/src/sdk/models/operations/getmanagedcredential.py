from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedCredentialPathParams:
    credential_id: int = field(default=None, metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedCredentialSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedCredentialSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedCredentialSecurity:
    option1: Optional[GetManagedCredentialSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedCredentialSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedCredentialRequest:
    path_params: GetManagedCredentialPathParams = field(default=None)
    security: GetManagedCredentialSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedCredentialDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedCredentialResponse:
    content_type: str = field(default=None)
    managed_credential: Optional[shared.ManagedCredential] = field(default=None)
    status_code: int = field(default=None)
    get_managed_credential_default_application_json_object: Optional[GetManagedCredentialDefaultApplicationJSON] = field(default=None)
    
