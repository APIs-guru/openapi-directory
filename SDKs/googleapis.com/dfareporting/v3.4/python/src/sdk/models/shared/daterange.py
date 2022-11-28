from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DateRangeRelativeDateRangeEnum(str, Enum):
    TODAY = "TODAY"
    YESTERDAY = "YESTERDAY"
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
    LAST_24_MONTHS = "LAST_24_MONTHS"
    LAST_14_DAYS = "LAST_14_DAYS"
    LAST_60_DAYS = "LAST_60_DAYS"


@dataclass_json
@dataclass
class DateRange:
    r"""DateRange
    Represents a date range.
    """
    
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    relative_date_range: Optional[DateRangeRelativeDateRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDateRange') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
