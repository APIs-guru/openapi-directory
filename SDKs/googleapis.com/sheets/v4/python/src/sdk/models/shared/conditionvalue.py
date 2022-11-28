from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConditionValueRelativeDateEnum(str, Enum):
    RELATIVE_DATE_UNSPECIFIED = "RELATIVE_DATE_UNSPECIFIED"
    PAST_YEAR = "PAST_YEAR"
    PAST_MONTH = "PAST_MONTH"
    PAST_WEEK = "PAST_WEEK"
    YESTERDAY = "YESTERDAY"
    TODAY = "TODAY"
    TOMORROW = "TOMORROW"


@dataclass_json
@dataclass
class ConditionValue:
    r"""ConditionValue
    The value of the condition.
    """
    
    relative_date: Optional[ConditionValueRelativeDateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDate') }})
    user_entered_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEnteredValue') }})
    
