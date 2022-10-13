from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gridrange

class DeleteRangeRequestShiftDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class DeleteRangeRequest:
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    shift_dimension: Optional[DeleteRangeRequestShiftDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shiftDimension' }})
    
