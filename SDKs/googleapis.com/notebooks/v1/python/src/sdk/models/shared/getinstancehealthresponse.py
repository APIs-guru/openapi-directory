from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetInstanceHealthResponseHealthStateEnum(str, Enum):
    HEALTH_STATE_UNSPECIFIED = "HEALTH_STATE_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    AGENT_NOT_INSTALLED = "AGENT_NOT_INSTALLED"
    AGENT_NOT_RUNNING = "AGENT_NOT_RUNNING"


@dataclass_json
@dataclass
class GetInstanceHealthResponse:
    health_info: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthInfo' }})
    health_state: Optional[GetInstanceHealthResponseHealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthState' }})
    
