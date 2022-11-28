from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateManagedCredentialRequestBodyInput:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass
class CreateManagedCredentialSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateManagedCredentialDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateManagedCredentialRequest:
    security: CreateManagedCredentialSecurity = field()
    request: Optional[CreateManagedCredentialRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateManagedCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    managed_credential: Optional[shared.ManagedCredential] = field(default=None)
    create_managed_credential_default_application_json_object: Optional[CreateManagedCredentialDefaultApplicationJSON] = field(default=None)
    
