from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ControlResponseCommandEnum(str, Enum):
    CANCEL = "cancel"
    TRIGGER_NEXT_EVENT = "trigger_next_event"


@dataclass_json
@dataclass
class ControlResponse:
    command: Optional[ControlResponseCommandEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
