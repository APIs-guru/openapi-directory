from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filter

class CompositeFilterOpEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    AND = "AND"


@dataclass_json
@dataclass
class CompositeFilter:
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    op: Optional[CompositeFilterOpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    
