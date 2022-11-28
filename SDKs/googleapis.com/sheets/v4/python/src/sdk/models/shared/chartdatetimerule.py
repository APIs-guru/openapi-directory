from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChartDateTimeRuleTypeEnum(str, Enum):
    CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED = "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED"
    SECOND = "SECOND"
    MINUTE = "MINUTE"
    HOUR = "HOUR"
    HOUR_MINUTE = "HOUR_MINUTE"
    HOUR_MINUTE_AMPM = "HOUR_MINUTE_AMPM"
    DAY_OF_WEEK = "DAY_OF_WEEK"
    DAY_OF_YEAR = "DAY_OF_YEAR"
    DAY_OF_MONTH = "DAY_OF_MONTH"
    DAY_MONTH = "DAY_MONTH"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    YEAR = "YEAR"
    YEAR_MONTH = "YEAR_MONTH"
    YEAR_QUARTER = "YEAR_QUARTER"
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY"


@dataclass_json
@dataclass
class ChartDateTimeRule:
    r"""ChartDateTimeRule
    Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
    """
    
    type: Optional[ChartDateTimeRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
