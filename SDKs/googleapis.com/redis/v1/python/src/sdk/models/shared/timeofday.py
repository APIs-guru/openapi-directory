from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeOfDay:
    r"""TimeOfDay
    Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
    """
    
    hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours') }})
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes') }})
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nanos') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    
