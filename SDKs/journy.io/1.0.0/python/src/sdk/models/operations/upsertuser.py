from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpsertUserRequestBodyIdentification:
    r"""UpsertUserRequestBodyIdentification
    User identification requires a userId, email or both
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class UpsertUserRequestBody:
    r"""UpsertUserRequestBody
    Update properties of a user
    """
    
    identification: UpsertUserRequestBodyIdentification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identification') }})
    properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class UpsertUser201ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertUser201ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertUser201ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSONErrorsParameters:
    r"""UpsertUser400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSONErrors:
    r"""UpsertUser400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[UpsertUser400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertUser400ApplicationJSON:
    errors: UpsertUser400ApplicationJSONErrors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertUser400ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertUser401ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertUser401ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertUser401ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertUser403ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertUser403ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertUser403ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertUser429ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertUser429ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertUser429ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertUser500ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertUser500ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertUser500ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class UpsertUserRequest:
    request: UpsertUserRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpsertUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    upsert_user_201_application_json_object: Optional[UpsertUser201ApplicationJSON] = field(default=None)
    upsert_user_400_application_json_object: Optional[UpsertUser400ApplicationJSON] = field(default=None)
    upsert_user_401_application_json_object: Optional[UpsertUser401ApplicationJSON] = field(default=None)
    upsert_user_403_application_json_object: Optional[UpsertUser403ApplicationJSON] = field(default=None)
    upsert_user_429_application_json_object: Optional[UpsertUser429ApplicationJSON] = field(default=None)
    upsert_user_500_application_json_object: Optional[UpsertUser500ApplicationJSON] = field(default=None)
    
