from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrderDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class Order:
    r"""Order
    An order on a field.
    """
    
    direction: Optional[OrderDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    field: Optional[FieldReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    
