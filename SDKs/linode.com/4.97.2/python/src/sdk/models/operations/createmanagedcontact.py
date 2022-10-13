from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateManagedContactSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateManagedContactSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateManagedContactSecurity:
    option1: Optional[CreateManagedContactSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateManagedContactSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateManagedContactRequest:
    request: Optional[shared.ManagedContact] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateManagedContactSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateManagedContactResponse:
    content_type: str = field(default=None)
    managed_contact: Optional[shared.ManagedContact] = field(default=None)
    status_code: int = field(default=None)
    create_managed_contact_default_application_json_object: Optional[CreateManagedContactDefaultApplicationJSON] = field(default=None)
    
