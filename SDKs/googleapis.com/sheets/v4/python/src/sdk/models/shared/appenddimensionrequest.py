from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AppendDimensionRequestDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class AppendDimensionRequest:
    dimension: Optional[AppendDimensionRequestDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheetId' }})
    
