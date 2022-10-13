from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class ValueRangeMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class ValueRange:
    major_dimension: Optional[ValueRangeMajorDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorDimension' }})
    range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
