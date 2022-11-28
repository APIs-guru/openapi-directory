from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RunQueryRequestDataRangeEnum(str, Enum):
    CUSTOM_DATES = "CUSTOM_DATES"
    CURRENT_DAY = "CURRENT_DAY"
    PREVIOUS_DAY = "PREVIOUS_DAY"
    WEEK_TO_DATE = "WEEK_TO_DATE"
    MONTH_TO_DATE = "MONTH_TO_DATE"
    QUARTER_TO_DATE = "QUARTER_TO_DATE"
    YEAR_TO_DATE = "YEAR_TO_DATE"
    PREVIOUS_WEEK = "PREVIOUS_WEEK"
    PREVIOUS_HALF_MONTH = "PREVIOUS_HALF_MONTH"
    PREVIOUS_MONTH = "PREVIOUS_MONTH"
    PREVIOUS_QUARTER = "PREVIOUS_QUARTER"
    PREVIOUS_YEAR = "PREVIOUS_YEAR"
    LAST_7_DAYS = "LAST_7_DAYS"
    LAST_30_DAYS = "LAST_30_DAYS"
    LAST_90_DAYS = "LAST_90_DAYS"
    LAST_365_DAYS = "LAST_365_DAYS"
    ALL_TIME = "ALL_TIME"
    LAST_14_DAYS = "LAST_14_DAYS"
    TYPE_NOT_SUPPORTED = "TYPE_NOT_SUPPORTED"
    LAST_60_DAYS = "LAST_60_DAYS"


@dataclass_json
@dataclass
class RunQueryRequest:
    r"""RunQueryRequest
    Request to run a stored query to generate a report.
    """
    
    data_range: Optional[RunQueryRequestDataRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    report_data_end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDataEndTimeMs') }})
    report_data_start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDataStartTimeMs') }})
    timezone_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneCode') }})
    
