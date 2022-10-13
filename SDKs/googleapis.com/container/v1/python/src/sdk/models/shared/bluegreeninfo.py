from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class BlueGreenInfoPhaseEnum(str, Enum):
    PHASE_UNSPECIFIED = "PHASE_UNSPECIFIED"
    UPDATE_STARTED = "UPDATE_STARTED"
    CREATING_GREEN_POOL = "CREATING_GREEN_POOL"
    CORDONING_BLUE_POOL = "CORDONING_BLUE_POOL"
    DRAINING_BLUE_POOL = "DRAINING_BLUE_POOL"
    NODE_POOL_SOAKING = "NODE_POOL_SOAKING"
    DELETING_BLUE_POOL = "DELETING_BLUE_POOL"
    ROLLBACK_STARTED = "ROLLBACK_STARTED"


@dataclass_json
@dataclass
class BlueGreenInfo:
    blue_instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueInstanceGroupUrls' }})
    blue_pool_deletion_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bluePoolDeletionStartTime' }})
    green_instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greenInstanceGroupUrls' }})
    green_pool_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greenPoolVersion' }})
    phase: Optional[BlueGreenInfoPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    
