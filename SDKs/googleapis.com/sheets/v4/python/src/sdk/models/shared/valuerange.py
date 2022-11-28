from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ValueRangeMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class ValueRange:
    r"""ValueRange
    Data within a range of the spreadsheet.
    """
    
    major_dimension: Optional[ValueRangeMajorDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorDimension') }})
    range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
