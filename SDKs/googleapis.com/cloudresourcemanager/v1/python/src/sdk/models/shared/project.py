from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourceid

class ProjectLifecycleStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETE_REQUESTED = "DELETE_REQUESTED"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"


@dataclass_json
@dataclass
class Project:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lifecycle_state: Optional[ProjectLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[resourceid.ResourceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectNumber' }})
    
