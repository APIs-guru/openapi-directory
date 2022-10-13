from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FeatureResourceStateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLING = "ENABLING"
    ACTIVE = "ACTIVE"
    DISABLING = "DISABLING"
    UPDATING = "UPDATING"
    SERVICE_UPDATING = "SERVICE_UPDATING"


@dataclass_json
@dataclass
class FeatureResourceState:
    state: Optional[FeatureResourceStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
