from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetManagedContactPathParams:
    contact_id: int = field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetManagedContactSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetManagedContactRequest:
    path_params: GetManagedContactPathParams = field()
    security: GetManagedContactSecurity = field()
    

@dataclass
class GetManagedContactResponse:
    content_type: str = field()
    status_code: int = field()
    managed_contact: Optional[shared.ManagedContact] = field(default=None)
    get_managed_contact_default_application_json_object: Optional[GetManagedContactDefaultApplicationJSON] = field(default=None)
    
