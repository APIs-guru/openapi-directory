from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FleetLifecycleStateCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class FleetLifecycleState:
    code: Optional[FleetLifecycleStateCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
