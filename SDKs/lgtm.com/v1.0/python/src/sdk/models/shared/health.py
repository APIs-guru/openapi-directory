from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import health

class HealthStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    UP = "UP"
    DOWN = "DOWN"


@dataclass_json
@dataclass
class Health:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    details: Optional[dict[str, health.Health]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    status: Optional[HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
