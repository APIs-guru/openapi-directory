from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SchedulingNodeAffinityOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    IN = "IN"
    NOT_IN = "NOT_IN"


@dataclass_json
@dataclass
class SchedulingNodeAffinity:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    operator: Optional[SchedulingNodeAffinityOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
