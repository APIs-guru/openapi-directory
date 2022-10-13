from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcerecordset
from . import resourcerecordset

class ChangeStatusEnum(str, Enum):
    PENDING = "PENDING"
    DONE = "DONE"


@dataclass_json
@dataclass
class Change:
    additions: Optional[List[resourcerecordset.ResourceRecordSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additions' }})
    deletions: Optional[List[resourcerecordset.ResourceRecordSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletions' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_serving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isServing' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    status: Optional[ChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
