from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActionStatusStatusCodeEnum(str, Enum):
    OK = "OK"
    CANCELLED = "CANCELLED"
    UNKNOWN = "UNKNOWN"
    INVALID_ARGUMENT = "INVALID_ARGUMENT"
    DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED"
    NOT_FOUND = "NOT_FOUND"
    ALREADY_EXISTS = "ALREADY_EXISTS"
    PERMISSION_DENIED = "PERMISSION_DENIED"
    UNAUTHENTICATED = "UNAUTHENTICATED"
    RESOURCE_EXHAUSTED = "RESOURCE_EXHAUSTED"
    FAILED_PRECONDITION = "FAILED_PRECONDITION"
    ABORTED = "ABORTED"
    OUT_OF_RANGE = "OUT_OF_RANGE"
    UNIMPLEMENTED = "UNIMPLEMENTED"
    INTERNAL = "INTERNAL"
    UNAVAILABLE = "UNAVAILABLE"
    DATA_LOSS = "DATA_LOSS"


@dataclass_json
@dataclass
class ActionStatus:
    r"""ActionStatus
    Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
    """
    
    status_code: Optional[ActionStatusStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    user_facing_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFacingMessage') }})
    
