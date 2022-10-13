from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EventRecordFailureFailureCauseEnum(str, Enum):
    EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED"
    NOT_FOUND = "NOT_FOUND"
    INVALID_UPDATE_VALUE = "INVALID_UPDATE_VALUE"


@dataclass_json
@dataclass
class EventRecordFailure:
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    failure_cause: Optional[EventRecordFailureFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCause' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
