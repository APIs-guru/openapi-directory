from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DimensionRangeDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class DimensionRange:
    dimension: Optional[DimensionRangeDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    
