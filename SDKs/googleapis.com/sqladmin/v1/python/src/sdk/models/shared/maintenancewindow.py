from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MaintenanceWindowUpdateTrackEnum(str, Enum):
    SQL_UPDATE_TRACK_UNSPECIFIED = "SQL_UPDATE_TRACK_UNSPECIFIED"
    CANARY = "canary"
    STABLE = "stable"


@dataclass_json
@dataclass
class MaintenanceWindow:
    day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    update_track: Optional[MaintenanceWindowUpdateTrackEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTrack' }})
    
