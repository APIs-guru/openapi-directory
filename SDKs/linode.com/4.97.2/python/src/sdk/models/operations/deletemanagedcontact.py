from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteManagedContactPathParams:
    contact_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteManagedContactSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteManagedContactSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteManagedContactSecurity:
    option1: Optional[DeleteManagedContactSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteManagedContactSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteManagedContactRequest:
    path_params: DeleteManagedContactPathParams = field(default=None)
    security: DeleteManagedContactSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteManagedContactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_managed_contact_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_managed_contact_default_application_json_object: Optional[DeleteManagedContactDefaultApplicationJSON] = field(default=None)
    
