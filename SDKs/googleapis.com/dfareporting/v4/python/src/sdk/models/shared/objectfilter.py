from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ObjectFilterStatusEnum(str, Enum):
    NONE = "NONE"
    ASSIGNED = "ASSIGNED"
    ALL = "ALL"


@dataclass_json
@dataclass
class ObjectFilter:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    status: Optional[ObjectFilterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
