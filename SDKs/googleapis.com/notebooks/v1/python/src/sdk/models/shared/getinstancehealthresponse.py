from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetInstanceHealthResponseHealthStateEnum(str, Enum):
    HEALTH_STATE_UNSPECIFIED = "HEALTH_STATE_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    AGENT_NOT_INSTALLED = "AGENT_NOT_INSTALLED"
    AGENT_NOT_RUNNING = "AGENT_NOT_RUNNING"


@dataclass_json
@dataclass
class GetInstanceHealthResponse:
    r"""GetInstanceHealthResponse
    Response for checking if a notebook instance is healthy.
    """
    
    health_info: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthInfo') }})
    health_state: Optional[GetInstanceHealthResponseHealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthState') }})
    
