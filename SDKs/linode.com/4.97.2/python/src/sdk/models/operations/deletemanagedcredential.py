from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteManagedCredentialPathParams:
    credential_id: int = field(metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedCredentialSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteManagedCredentialDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteManagedCredentialRequest:
    path_params: DeleteManagedCredentialPathParams = field()
    security: DeleteManagedCredentialSecurity = field()
    

@dataclass
class DeleteManagedCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    delete_managed_credential_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_managed_credential_default_application_json_object: Optional[DeleteManagedCredentialDefaultApplicationJSON] = field(default=None)
    
