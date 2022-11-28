from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InsertRangeRequestShiftDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class InsertRangeRequest:
    r"""InsertRangeRequest
    Inserts cells into a range, shifting the existing cells over or down.
    """
    
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    shift_dimension: Optional[InsertRangeRequestShiftDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shiftDimension') }})
    
