from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ErrorsCodeEnum(str, Enum):
    BAD_REQUEST = "BAD_REQUEST"
    FORBIDDEN = "FORBIDDEN"
    NOT_FOUND = "NOT_FOUND"
    CONFLICT = "CONFLICT"
    GONE = "GONE"
    PRECONDITION_FAILED = "PRECONDITION_FAILED"
    INTERNAL_ERROR = "INTERNAL_ERROR"
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE"


@dataclass_json
@dataclass
class Errors:
    r"""Errors
    Request Error information. The presence of an error field signals that the operation has failed.
    """
    
    code: Optional[ErrorsCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: Optional[List[ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
