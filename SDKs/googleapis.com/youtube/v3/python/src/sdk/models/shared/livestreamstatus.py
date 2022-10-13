from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import livestreamhealthstatus

class LiveStreamStatusStreamStatusEnum(str, Enum):
    CREATED = "created"
    READY = "ready"
    ACTIVE = "active"
    INACTIVE = "inactive"
    ERROR = "error"


@dataclass_json
@dataclass
class LiveStreamStatus:
    health_status: Optional[livestreamhealthstatus.LiveStreamHealthStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthStatus' }})
    stream_status: Optional[LiveStreamStatusStreamStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamStatus' }})
    
