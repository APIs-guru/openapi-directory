from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateMessengerAccountRequestBody:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class CreateMessengerAccountSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateMessengerAccountSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessengerAccountSecurity:
    option1: Optional[CreateMessengerAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateMessengerAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateMessengerAccountRequest:
    request: CreateMessengerAccountRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateMessengerAccountSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateMessengerAccount400ApplicationJSONInvalidParams:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class CreateMessengerAccount400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_params: Optional[List[CreateMessengerAccount400ApplicationJSONInvalidParams]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_params' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateMessengerAccountResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    four_hundred_and_three_response: Optional[shared.FourHundredAndThreeResponse] = field(default=None)
    content_type: str = field(default=None)
    create_messenger_account_400_application_json_object: Optional[CreateMessengerAccount400ApplicationJSON] = field(default=None)
    messenger_account_response: Optional[shared.MessengerAccountResponse] = field(default=None)
    status_code: int = field(default=None)
    
