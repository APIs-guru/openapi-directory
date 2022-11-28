from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateManagedContactSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateManagedContactRequest:
    security: CreateManagedContactSecurity = field()
    request: Optional[shared.ManagedContactInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateManagedContactResponse:
    content_type: str = field()
    status_code: int = field()
    managed_contact: Optional[shared.ManagedContact] = field(default=None)
    create_managed_contact_default_application_json_object: Optional[CreateManagedContactDefaultApplicationJSON] = field(default=None)
    
