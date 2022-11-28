from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RangeTypeEnum(str, Enum):
    RANGE_TYPE_UNSPECIFIED = "RANGE_TYPE_UNSPECIFIED"
    FIXED_RANGE = "FIXED_RANGE"
    FROM_START_INDEX = "FROM_START_INDEX"
    ALL = "ALL"


@dataclass_json
@dataclass
class Range:
    r"""Range
    Specifies a contiguous range of an indexed collection, such as characters in text.
    """
    
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    type: Optional[RangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
