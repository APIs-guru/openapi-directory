from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateManagedCredentialRequestBody:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    last_decrypted: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_decrypted', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class CreateManagedCredentialSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateManagedCredentialSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateManagedCredentialSecurity:
    option1: Optional[CreateManagedCredentialSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateManagedCredentialSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateManagedCredentialRequest:
    request: Optional[CreateManagedCredentialRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateManagedCredentialSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateManagedCredentialDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateManagedCredentialResponse:
    content_type: str = field(default=None)
    managed_credential: Optional[shared.ManagedCredential] = field(default=None)
    status_code: int = field(default=None)
    create_managed_credential_default_application_json_object: Optional[CreateManagedCredentialDefaultApplicationJSON] = field(default=None)
    
