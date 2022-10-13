from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    relative_date_range: Optional[DateRangeRelativeDateRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeDateRange' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
