from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAppsCardV1DateTimePickerTypeEnum(str, Enum):
    DATE_AND_TIME = "DATE_AND_TIME"
    DATE_ONLY = "DATE_ONLY"
    TIME_ONLY = "TIME_ONLY"


@dataclass_json
@dataclass
class GoogleAppsCardV1DateTimePicker:
    r"""GoogleAppsCardV1DateTimePicker
    Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    on_change_action: Optional[GoogleAppsCardV1Action] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onChangeAction') }})
    timezone_offset_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneOffsetDate') }})
    type: Optional[GoogleAppsCardV1DateTimePickerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value_ms_epoch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueMsEpoch') }})
    
