from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ClusterTelemetryTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    SYSTEM_ONLY = "SYSTEM_ONLY"


@dataclass_json
@dataclass
class ClusterTelemetry:
    type: Optional[ClusterTelemetryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
