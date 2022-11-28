from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteManagedContactPathParams:
    contact_id: int = field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedContactSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteManagedContactRequest:
    path_params: DeleteManagedContactPathParams = field()
    security: DeleteManagedContactSecurity = field()
    

@dataclass
class DeleteManagedContactResponse:
    content_type: str = field()
    status_code: int = field()
    delete_managed_contact_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_managed_contact_default_application_json_object: Optional[DeleteManagedContactDefaultApplicationJSON] = field(default=None)
    
