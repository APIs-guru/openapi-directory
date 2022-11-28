from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    IDLE = "IDLE"
    HEARTBEAT = "HEARTBEAT"
    HEALTH = "HEALTH"
    MAINTENANCE = "MAINTENANCE"


@dataclass_json
@dataclass
class Event:
    r"""Event
    The definition of an Event for a managed / semi-managed notebook instance.
    """
    
    details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    type: Optional[EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
