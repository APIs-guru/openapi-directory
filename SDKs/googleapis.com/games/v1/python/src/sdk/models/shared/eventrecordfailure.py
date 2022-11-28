from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EventRecordFailureFailureCauseEnum(str, Enum):
    EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED"
    NOT_FOUND = "NOT_FOUND"
    INVALID_UPDATE_VALUE = "INVALID_UPDATE_VALUE"


@dataclass_json
@dataclass
class EventRecordFailure:
    r"""EventRecordFailure
    An event update failure resource.
    """
    
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    failure_cause: Optional[EventRecordFailureFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCause') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
