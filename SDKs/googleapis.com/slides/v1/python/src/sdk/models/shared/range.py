from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RangeTypeEnum(str, Enum):
    RANGE_TYPE_UNSPECIFIED = "RANGE_TYPE_UNSPECIFIED"
    FIXED_RANGE = "FIXED_RANGE"
    FROM_START_INDEX = "FROM_START_INDEX"
    ALL = "ALL"


@dataclass_json
@dataclass
class Range:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    type: Optional[RangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
