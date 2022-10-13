from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NodeBalancerNodeModeEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"
    DRAIN = "drain"
    BACKUP = "backup"

class NodeBalancerNodeStatusEnum(str, Enum):
    UNKNOWN = "unknown"
    UP = "UP"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class NodeBalancerNode:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_id' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    mode: Optional[NodeBalancerNodeModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    nodebalancer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodebalancer_id' }})
    status: Optional[NodeBalancerNodeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
