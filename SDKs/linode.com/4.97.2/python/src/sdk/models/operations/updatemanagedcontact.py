from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateManagedContactPathParams:
    contact_id: int = field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateManagedContactSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateManagedContactDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateManagedContactRequest:
    path_params: UpdateManagedContactPathParams = field()
    request: shared.ManagedContactInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateManagedContactSecurity = field()
    

@dataclass
class UpdateManagedContactResponse:
    content_type: str = field()
    status_code: int = field()
    managed_contact: Optional[shared.ManagedContact] = field(default=None)
    update_managed_contact_default_application_json_object: Optional[UpdateManagedContactDefaultApplicationJSON] = field(default=None)
    
