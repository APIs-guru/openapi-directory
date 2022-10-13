from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datafilter

class BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum(str, Enum):
    SERIAL_NUMBER = "SERIAL_NUMBER"
    FORMATTED_STRING = "FORMATTED_STRING"

class BatchGetValuesByDataFilterRequestMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"

class BatchGetValuesByDataFilterRequestValueRenderOptionEnum(str, Enum):
    FORMATTED_VALUE = "FORMATTED_VALUE"
    UNFORMATTED_VALUE = "UNFORMATTED_VALUE"
    FORMULA = "FORMULA"


@dataclass_json
@dataclass
class BatchGetValuesByDataFilterRequest:
    data_filters: Optional[List[datafilter.DataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataFilters' }})
    date_time_render_option: Optional[BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTimeRenderOption' }})
    major_dimension: Optional[BatchGetValuesByDataFilterRequestMajorDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorDimension' }})
    value_render_option: Optional[BatchGetValuesByDataFilterRequestValueRenderOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueRenderOption' }})
    
