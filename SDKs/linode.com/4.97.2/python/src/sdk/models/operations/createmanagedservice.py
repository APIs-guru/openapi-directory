from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateManagedServiceRequestBodyServiceTypeEnum(str, Enum):
    URL = "url"
    TCP = "tcp"


@dataclass_json
@dataclass
class CreateManagedServiceRequestBodyInput:
    address: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    service_type: CreateManagedServiceRequestBodyServiceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    consultation_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consultation_group') }})
    credentials: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    

@dataclass
class CreateManagedServiceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateManagedServiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateManagedServiceRequest:
    security: CreateManagedServiceSecurity = field()
    request: Optional[CreateManagedServiceRequestBodyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateManagedServiceResponse:
    content_type: str = field()
    status_code: int = field()
    managed_service: Optional[shared.ManagedService] = field(default=None)
    create_managed_service_default_application_json_object: Optional[CreateManagedServiceDefaultApplicationJSON] = field(default=None)
    
