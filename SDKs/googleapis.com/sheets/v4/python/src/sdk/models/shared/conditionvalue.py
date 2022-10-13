from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    relative_date: Optional[ConditionValueRelativeDateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeDate' }})
    user_entered_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEnteredValue' }})
    
