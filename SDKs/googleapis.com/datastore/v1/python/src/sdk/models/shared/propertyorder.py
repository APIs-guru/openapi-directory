from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PropertyOrderDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class PropertyOrder:
    r"""PropertyOrder
    The desired order for a specific property.
    """
    
    direction: Optional[PropertyOrderDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    property: Optional[PropertyReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    
