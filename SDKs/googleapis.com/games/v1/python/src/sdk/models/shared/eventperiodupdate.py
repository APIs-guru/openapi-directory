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
class EventPeriodUpdate:
    r"""EventPeriodUpdate
    An event period update resource.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    time_period: Optional[EventPeriodRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePeriod') }})
    updates: Optional[List[EventUpdateRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    
