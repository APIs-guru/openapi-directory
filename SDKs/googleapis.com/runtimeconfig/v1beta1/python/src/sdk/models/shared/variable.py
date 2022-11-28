from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VariableStateEnum(str, Enum):
    VARIABLE_STATE_UNSPECIFIED = "VARIABLE_STATE_UNSPECIFIED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Variable:
    r"""Variable
    Describes a single variable within a RuntimeConfig resource. The name denotes the hierarchical variable name. For example, `ports/serving_port` is a valid variable name. The variable value is an opaque string and only leaf variables can have values (that is, variables that do not have any child variables).
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[VariableStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
