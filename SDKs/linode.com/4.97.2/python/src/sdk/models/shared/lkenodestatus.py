from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LkeNodeStatusStatusEnum(str, Enum):
    READY = "ready"
    NOT_READY = "not_ready"


@dataclass_json
@dataclass
class LkeNodeStatus:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance_id' }})
    status: Optional[LkeNodeStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
