from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class StateHistoryStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATED = "CREATED"
    TURNED_IN = "TURNED_IN"
    RETURNED = "RETURNED"
    RECLAIMED_BY_STUDENT = "RECLAIMED_BY_STUDENT"
    STUDENT_EDITED_AFTER_TURN_IN = "STUDENT_EDITED_AFTER_TURN_IN"


@dataclass_json
@dataclass
class StateHistory:
    actor_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actorUserId' }})
    state: Optional[StateHistoryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTimestamp' }})
    
