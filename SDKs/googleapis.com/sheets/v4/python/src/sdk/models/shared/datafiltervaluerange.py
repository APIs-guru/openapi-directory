from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datafilter

class DataFilterValueRangeMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class DataFilterValueRange:
    data_filter: Optional[datafilter.DataFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilter' }})
    major_dimension: Optional[DataFilterValueRangeMajorDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorDimension' }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
