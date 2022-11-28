from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnterpriseCrmEventbusProtoConditionOperatorEnum(str, Enum):
    UNSET = "UNSET"
    EQUALS = "EQUALS"
    CONTAINS = "CONTAINS"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"
    EXISTS = "EXISTS"
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
    IS_EMPTY = "IS_EMPTY"
    IS_NOT_EMPTY = "IS_NOT_EMPTY"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoCondition:
    r"""EnterpriseCrmEventbusProtoCondition
    Condition that uses `operator` to evaluate the key against the value.
    """
    
    event_property_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventPropertyKey') }})
    operator: Optional[EnterpriseCrmEventbusProtoConditionOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    value: Optional[EnterpriseCrmEventbusProtoValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
