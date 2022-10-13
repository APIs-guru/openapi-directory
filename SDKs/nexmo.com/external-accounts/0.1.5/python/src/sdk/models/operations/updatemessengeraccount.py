from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateMessengerAccountPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccountRequestBody:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class UpdateMessengerAccountSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateMessengerAccountSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessengerAccountSecurity:
    option1: Optional[UpdateMessengerAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateMessengerAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateMessengerAccountRequest:
    path_params: UpdateMessengerAccountPathParams = field(default=None)
    request: UpdateMessengerAccountRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateMessengerAccountSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateMessengerAccount200ApplicationJSON:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    api_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_key' }})
    applications: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applications' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccount400ApplicationJSONInvalidParams:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass_json
@dataclass
class UpdateMessengerAccount400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    invalid_params: Optional[List[UpdateMessengerAccount400ApplicationJSONInvalidParams]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_params' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class UpdateMessengerAccountResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    four_hundred_and_three_response: Optional[shared.FourHundredAndThreeResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_messenger_account_200_application_json_object: Optional[UpdateMessengerAccount200ApplicationJSON] = field(default=None)
    update_messenger_account_400_application_json_object: Optional[UpdateMessengerAccount400ApplicationJSON] = field(default=None)
    
