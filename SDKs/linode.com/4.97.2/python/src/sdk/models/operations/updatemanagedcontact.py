from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateManagedContactPathParams:
    contact_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedContactSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateManagedContactSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateManagedContactSecurity:
    option1: Optional[UpdateManagedContactSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateManagedContactSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateManagedContactRequest:
    path_params: UpdateManagedContactPathParams = field(default=None)
    request: shared.ManagedContact = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateManagedContactSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateManagedContactResponse:
    content_type: str = field(default=None)
    managed_contact: Optional[shared.ManagedContact] = field(default=None)
    status_code: int = field(default=None)
    update_managed_contact_default_application_json_object: Optional[UpdateManagedContactDefaultApplicationJSON] = field(default=None)
    
