from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class YarnApplicationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NEW = "NEW"
    NEW_SAVING = "NEW_SAVING"
    SUBMITTED = "SUBMITTED"
    ACCEPTED = "ACCEPTED"
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    FAILED = "FAILED"
    KILLED = "KILLED"


@dataclass_json
@dataclass
class YarnApplication:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    state: Optional[YarnApplicationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingUrl' }})
    
