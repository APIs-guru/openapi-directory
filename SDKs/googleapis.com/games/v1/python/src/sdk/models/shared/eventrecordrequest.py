from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventRecordRequest:
    r"""EventRecordRequest
    An event period update resource.
    """
    
    current_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentTimeMillis') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    time_periods: Optional[List[EventPeriodUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePeriods') }})
    
