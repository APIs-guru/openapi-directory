from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AddUserToAccountPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddUserToAccountRequestBody:
    r"""AddUserToAccountRequestBody
    The user being added/removed from the account
    """
    
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class AddUserToAccount201ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AddUserToAccount201ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount201ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class AddUserToAccount400ApplicationJSONErrorsParameters:
    r"""AddUserToAccount400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclass
class AddUserToAccount400ApplicationJSONErrors:
    r"""AddUserToAccount400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[AddUserToAccount400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class AddUserToAccount400ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AddUserToAccount400ApplicationJSON:
    errors: AddUserToAccount400ApplicationJSONErrors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount400ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class AddUserToAccount401ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AddUserToAccount401ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount401ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class AddUserToAccount429ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AddUserToAccount429ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount429ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class AddUserToAccount500ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class AddUserToAccount500ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: AddUserToAccount500ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class AddUserToAccountRequest:
    path_params: AddUserToAccountPathParams = field()
    request: AddUserToAccountRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddUserToAccountResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    add_user_to_account_201_application_json_object: Optional[AddUserToAccount201ApplicationJSON] = field(default=None)
    add_user_to_account_400_application_json_object: Optional[AddUserToAccount400ApplicationJSON] = field(default=None)
    add_user_to_account_401_application_json_object: Optional[AddUserToAccount401ApplicationJSON] = field(default=None)
    add_user_to_account_429_application_json_object: Optional[AddUserToAccount429ApplicationJSON] = field(default=None)
    add_user_to_account_500_application_json_object: Optional[AddUserToAccount500ApplicationJSON] = field(default=None)
    
