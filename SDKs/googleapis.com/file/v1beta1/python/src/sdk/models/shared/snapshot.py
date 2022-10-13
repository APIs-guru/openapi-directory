from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SnapshotStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Snapshot:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    filesystem_used_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesystemUsedBytes' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[SnapshotStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
