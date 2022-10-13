from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InternalCheckerStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"


@dataclass_json
@dataclass
class InternalChecker:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    gcp_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpZone' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    peer_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peerProjectId' }})
    state: Optional[InternalCheckerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
