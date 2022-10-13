from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PathQueryOptionsFilterMatchEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    EXACT = "EXACT"
    PARTIAL = "PARTIAL"
    BEGINS_WITH = "BEGINS_WITH"
    WILDCARD_EXPRESSION = "WILDCARD_EXPRESSION"


@dataclass_json
@dataclass
class PathQueryOptionsFilter:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    match: Optional[PathQueryOptionsFilterMatchEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
