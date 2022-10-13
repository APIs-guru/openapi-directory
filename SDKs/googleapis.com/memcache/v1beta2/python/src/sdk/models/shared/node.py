from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import memcacheparameters

class NodeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class Node:
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeId' }})
    parameters: Optional[memcacheparameters.MemcacheParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    state: Optional[NodeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAvailable' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
