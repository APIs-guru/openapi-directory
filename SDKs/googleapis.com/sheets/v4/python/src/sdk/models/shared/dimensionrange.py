from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DimensionRangeDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class DimensionRange:
    r"""DimensionRange
    A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
    """
    
    dimension: Optional[DimensionRangeDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    
