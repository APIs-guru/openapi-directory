from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    IDLE = "IDLE"
    HEARTBEAT = "HEARTBEAT"
    HEALTH = "HEALTH"
    MAINTENANCE = "MAINTENANCE"


@dataclass_json
@dataclass
class Event:
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    type: Optional[EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
