from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PathQueryOptionsFilterMatchEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    EXACT = "EXACT"
    PARTIAL = "PARTIAL"
    BEGINS_WITH = "BEGINS_WITH"
    WILDCARD_EXPRESSION = "WILDCARD_EXPRESSION"


@dataclass_json
@dataclass
class PathQueryOptionsFilter:
    r"""PathQueryOptionsFilter
    Dimension filter on path events.
    """
    
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    match: Optional[PathQueryOptionsFilterMatchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
