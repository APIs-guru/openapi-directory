from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventperiodrange

class EventBatchRecordFailureFailureCauseEnum(str, Enum):
    EVENT_FAILURE_CAUSE_UNSPECIFIED = "EVENT_FAILURE_CAUSE_UNSPECIFIED"
    TOO_LARGE = "TOO_LARGE"
    TIME_PERIOD_EXPIRED = "TIME_PERIOD_EXPIRED"
    TIME_PERIOD_SHORT = "TIME_PERIOD_SHORT"
    TIME_PERIOD_LONG = "TIME_PERIOD_LONG"
    ALREADY_UPDATED = "ALREADY_UPDATED"
    RECORD_RATE_HIGH = "RECORD_RATE_HIGH"


@dataclass_json
@dataclass
class EventBatchRecordFailure:
    failure_cause: Optional[EventBatchRecordFailureFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCause' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    range: Optional[eventperiodrange.EventPeriodRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
