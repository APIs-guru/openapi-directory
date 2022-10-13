from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bandwidthlimit

class AgentPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class AgentPool:
    bandwidth_limit: Optional[bandwidthlimit.BandwidthLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimit' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[AgentPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
