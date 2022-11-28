from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RemoveUserFromAccountPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccountRequestBody:
    r"""RemoveUserFromAccountRequestBody
    The user being added/removed from the account
    """
    
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount201ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount201ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount201ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount400ApplicationJSONErrorsParameters:
    r"""RemoveUserFromAccount400ApplicationJSONErrorsParameters
    All query-, header- and path- parameters that seemed incorrect
    """
    
    header: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    path: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    query: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount400ApplicationJSONErrors:
    r"""RemoveUserFromAccount400ApplicationJSONErrors
    Map that sums up all received values that seemed incorrect
    """
    
    fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    parameters: Optional[RemoveUserFromAccount400ApplicationJSONErrorsParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount400ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount400ApplicationJSON:
    errors: RemoveUserFromAccount400ApplicationJSONErrors = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount400ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount401ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount401ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount401ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount403ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount403ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount403ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount429ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount429ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount429ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount500ApplicationJSONMeta:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class RemoveUserFromAccount500ApplicationJSON:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    meta: RemoveUserFromAccount500ApplicationJSONMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class RemoveUserFromAccountRequest:
    path_params: RemoveUserFromAccountPathParams = field()
    request: RemoveUserFromAccountRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RemoveUserFromAccountResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    remove_user_from_account_201_application_json_object: Optional[RemoveUserFromAccount201ApplicationJSON] = field(default=None)
    remove_user_from_account_400_application_json_object: Optional[RemoveUserFromAccount400ApplicationJSON] = field(default=None)
    remove_user_from_account_401_application_json_object: Optional[RemoveUserFromAccount401ApplicationJSON] = field(default=None)
    remove_user_from_account_403_application_json_object: Optional[RemoveUserFromAccount403ApplicationJSON] = field(default=None)
    remove_user_from_account_429_application_json_object: Optional[RemoveUserFromAccount429ApplicationJSON] = field(default=None)
    remove_user_from_account_500_application_json_object: Optional[RemoveUserFromAccount500ApplicationJSON] = field(default=None)
    
