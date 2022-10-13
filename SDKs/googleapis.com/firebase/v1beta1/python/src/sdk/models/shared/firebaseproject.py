from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import defaultresources

class FirebaseProjectStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class FirebaseProject:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectNumber' }})
    resources: Optional[defaultresources.DefaultResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    state: Optional[FirebaseProjectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
