from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""EventBatchRecordFailure
    A batch update failure resource.
    """
    
    failure_cause: Optional[EventBatchRecordFailureFailureCauseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCause') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    range: Optional[EventPeriodRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
