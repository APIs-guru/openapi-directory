from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteManagedCredentialPathParams:
    credential_id: int = field(default=None, metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedCredentialSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteManagedCredentialSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteManagedCredentialSecurity:
    option1: Optional[DeleteManagedCredentialSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteManagedCredentialSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteManagedCredentialRequest:
    path_params: DeleteManagedCredentialPathParams = field(default=None)
    security: DeleteManagedCredentialSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteManagedCredentialDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteManagedCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_managed_credential_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_managed_credential_default_application_json_object: Optional[DeleteManagedCredentialDefaultApplicationJSON] = field(default=None)
    
