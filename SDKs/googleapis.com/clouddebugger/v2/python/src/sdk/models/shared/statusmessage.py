from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StatusMessageRefersToEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    BREAKPOINT_SOURCE_LOCATION = "BREAKPOINT_SOURCE_LOCATION"
    BREAKPOINT_CONDITION = "BREAKPOINT_CONDITION"
    BREAKPOINT_EXPRESSION = "BREAKPOINT_EXPRESSION"
    BREAKPOINT_AGE = "BREAKPOINT_AGE"
    BREAKPOINT_CANARY_FAILED = "BREAKPOINT_CANARY_FAILED"
    VARIABLE_NAME = "VARIABLE_NAME"
    VARIABLE_VALUE = "VARIABLE_VALUE"


@dataclass_json
@dataclass
class StatusMessage:
    r"""StatusMessage
    Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
    """
    
    description: Optional[FormatMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    is_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isError') }})
    refers_to: Optional[StatusMessageRefersToEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refersTo') }})
    
