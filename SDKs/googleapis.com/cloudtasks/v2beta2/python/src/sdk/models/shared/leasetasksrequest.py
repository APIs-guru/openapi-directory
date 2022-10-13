from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LeaseTasksRequestResponseViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclass
class LeaseTasksRequest:
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    lease_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leaseDuration' }})
    max_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTasks' }})
    response_view: Optional[LeaseTasksRequestResponseViewEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseView' }})
    
