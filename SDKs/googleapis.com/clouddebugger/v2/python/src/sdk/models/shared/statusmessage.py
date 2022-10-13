from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import formatmessage

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
    description: Optional[formatmessage.FormatMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    is_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isError' }})
    refers_to: Optional[StatusMessageRefersToEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refersTo' }})
    
