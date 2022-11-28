from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PropertyFilterOpEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    LESS_THAN = "LESS_THAN"
    LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL"
    GREATER_THAN = "GREATER_THAN"
    GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL"
    EQUAL = "EQUAL"
    IN = "IN"
    NOT_EQUAL = "NOT_EQUAL"
    HAS_ANCESTOR = "HAS_ANCESTOR"
    NOT_IN = "NOT_IN"


@dataclass_json
@dataclass
class PropertyFilter:
    r"""PropertyFilter
    A filter on a specific property.
    """
    
    op: Optional[PropertyFilterOpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    property: Optional[PropertyReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    value: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
