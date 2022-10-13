from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status

class UpgradeStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclass
class UpgradeStatus:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    previous_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousVersion' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[UpgradeStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
