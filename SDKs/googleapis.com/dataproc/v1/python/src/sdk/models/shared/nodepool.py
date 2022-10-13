from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class NodePoolRepairActionEnum(str, Enum):
    REPAIR_ACTION_UNSPECIFIED = "REPAIR_ACTION_UNSPECIFIED"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class NodePool:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNames' }})
    repair_action: Optional[NodePoolRepairActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repairAction' }})
    
