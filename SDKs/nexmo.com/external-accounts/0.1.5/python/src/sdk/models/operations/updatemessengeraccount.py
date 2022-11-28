from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateMessengerAccountPathParams:
    external_id: str = field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccountRequestBody:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class UpdateMessengerAccountSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccount200ApplicationJSON:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    external_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_id') }})
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccount400ApplicationJSONInvalidParams:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccount400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    invalid_params: Optional[List[UpdateMessengerAccount400ApplicationJSONInvalidParams]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalid_params') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class UpdateMessengerAccountRequest:
    path_params: UpdateMessengerAccountPathParams = field()
    request: UpdateMessengerAccountRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateMessengerAccountSecurity = field()
    

@dataclass
class UpdateMessengerAccountResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    four_hundred_and_three_response: Optional[shared.FourHundredAndThreeResponse] = field(default=None)
    update_messenger_account_200_application_json_object: Optional[UpdateMessengerAccount200ApplicationJSON] = field(default=None)
    update_messenger_account_400_application_json_object: Optional[UpdateMessengerAccount400ApplicationJSON] = field(default=None)
    
