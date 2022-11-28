from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataFilterValueRangeMajorDimensionEnum(str, Enum):
    DIMENSION_UNSPECIFIED = "DIMENSION_UNSPECIFIED"
    ROWS = "ROWS"
    COLUMNS = "COLUMNS"


@dataclass_json
@dataclass
class DataFilterValueRange:
    r"""DataFilterValueRange
    A range of values whose location is specified by a DataFilter.
    """
    
    data_filter: Optional[DataFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilter') }})
    major_dimension: Optional[DataFilterValueRangeMajorDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorDimension') }})
    values: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
