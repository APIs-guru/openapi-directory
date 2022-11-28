from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UnaryFilterOpEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    IS_NAN = "IS_NAN"
    IS_NULL = "IS_NULL"
    IS_NOT_NAN = "IS_NOT_NAN"
    IS_NOT_NULL = "IS_NOT_NULL"


@dataclass_json
@dataclass
class UnaryFilter:
    r"""UnaryFilter
    A filter with a single operand.
    """
    
    field: Optional[FieldReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    op: Optional[UnaryFilterOpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    
