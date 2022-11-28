from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClusterTelemetryTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"
    SYSTEM_ONLY = "SYSTEM_ONLY"


@dataclass_json
@dataclass
class ClusterTelemetry:
    r"""ClusterTelemetry
    Telemetry integration for the cluster.
    """
    
    type: Optional[ClusterTelemetryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
