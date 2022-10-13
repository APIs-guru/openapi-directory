from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import date
from . import date

class DataRangeRangeEnum(str, Enum):
    RANGE_UNSPECIFIED = "RANGE_UNSPECIFIED"
    CUSTOM_DATES = "CUSTOM_DATES"
    CURRENT_DAY = "CURRENT_DAY"
    PREVIOUS_DAY = "PREVIOUS_DAY"
    WEEK_TO_DATE = "WEEK_TO_DATE"
    MONTH_TO_DATE = "MONTH_TO_DATE"
    QUARTER_TO_DATE = "QUARTER_TO_DATE"
    YEAR_TO_DATE = "YEAR_TO_DATE"
    PREVIOUS_WEEK = "PREVIOUS_WEEK"
    PREVIOUS_MONTH = "PREVIOUS_MONTH"
    PREVIOUS_QUARTER = "PREVIOUS_QUARTER"
    PREVIOUS_YEAR = "PREVIOUS_YEAR"
    LAST_7_DAYS = "LAST_7_DAYS"
    LAST_30_DAYS = "LAST_30_DAYS"
    LAST_90_DAYS = "LAST_90_DAYS"
    LAST_365_DAYS = "LAST_365_DAYS"
    ALL_TIME = "ALL_TIME"
    LAST_14_DAYS = "LAST_14_DAYS"
    LAST_60_DAYS = "LAST_60_DAYS"


@dataclass_json
@dataclass
class DataRange:
    custom_end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customEndDate' }})
    custom_start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customStartDate' }})
    range: Optional[DataRangeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
