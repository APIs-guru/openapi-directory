from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""StateHistory
    The history of each state this submission has been in.
    """
    
    actor_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorUserId') }})
    state: Optional[StateHistoryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTimestamp') }})
    
