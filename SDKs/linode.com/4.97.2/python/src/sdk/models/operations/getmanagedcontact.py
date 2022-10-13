from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedContactPathParams:
    contact_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedContactSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedContactSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedContactSecurity:
    option1: Optional[GetManagedContactSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedContactSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedContactRequest:
    path_params: GetManagedContactPathParams = field(default=None)
    security: GetManagedContactSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedContactResponse:
    content_type: str = field(default=None)
    managed_contact: Optional[shared.ManagedContact] = field(default=None)
    status_code: int = field(default=None)
    get_managed_contact_default_application_json_object: Optional[GetManagedContactDefaultApplicationJSON] = field(default=None)
    
