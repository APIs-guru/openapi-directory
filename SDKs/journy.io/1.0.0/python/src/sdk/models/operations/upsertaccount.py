from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpsertAccountRequestBodyIdentification:
    r"""UpsertAccountRequestBodyIdentification
    Account identification requires an accountId, domain or both
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    

@dataclass_json
@dataclass
class UpsertAccountRequestBodyMembersIdentification:
    r"""UpsertAccountRequestBodyMembersIdentification
    User identification requires a userId, email or both
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class UpsertAccountRequestBodyMembers:
    r"""UpsertAccountRequestBodyMembers
    Identification requires an accountId, domain or both
    """
    
    identification: UpsertAccountRequestBodyMembersIdentification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identification') }})
    

@dataclass_json
@dataclass
class UpsertAccountRequestBody:
    r"""UpsertAccountRequestBody
    Update properties and/or members of an account
    """
    
    identification: UpsertAccountRequestBodyIdentification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identification') }})
    members: Optional[List[UpsertAccountRequestBodyMembers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclass
class UpsertAccount201ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertAccount201ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertAccount201ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSONErrorsParameters:
    r"""UpsertAccount400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSONErrors:
    r"""UpsertAccount400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[UpsertAccount400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertAccount400ApplicationJSON:
    errors: UpsertAccount400ApplicationJSONErrors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertAccount400ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertAccount401ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertAccount401ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertAccount401ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertAccount429ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertAccount429ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertAccount429ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class UpsertAccount500ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class UpsertAccount500ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: UpsertAccount500ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class UpsertAccountRequest:
    request: UpsertAccountRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpsertAccountResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    upsert_account_201_application_json_object: Optional[UpsertAccount201ApplicationJSON] = field(default=None)
    upsert_account_400_application_json_object: Optional[UpsertAccount400ApplicationJSON] = field(default=None)
    upsert_account_401_application_json_object: Optional[UpsertAccount401ApplicationJSON] = field(default=None)
    upsert_account_429_application_json_object: Optional[UpsertAccount429ApplicationJSON] = field(default=None)
    upsert_account_500_application_json_object: Optional[UpsertAccount500ApplicationJSON] = field(default=None)
    
