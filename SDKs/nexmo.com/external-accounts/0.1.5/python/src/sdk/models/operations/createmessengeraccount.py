from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateMessengerAccountRequestBody:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    external_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class CreateMessengerAccountSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateMessengerAccount400ApplicationJSONInvalidParams:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class CreateMessengerAccount400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_params: Optional[List[CreateMessengerAccount400ApplicationJSONInvalidParams]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_params') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class CreateMessengerAccountRequest:
    request: CreateMessengerAccountRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateMessengerAccountSecurity = field()
    

@dataclass
class CreateMessengerAccountResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    four_hundred_and_three_response: Optional[shared.FourHundredAndThreeResponse] = field(default=None)
    create_messenger_account_400_application_json_object: Optional[CreateMessengerAccount400ApplicationJSON] = field(default=None)
    messenger_account_response: Optional[shared.MessengerAccountResponse] = field(default=None)
    
