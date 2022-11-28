from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DateTimeRuleTypeEnum(str, Enum):
    DATE_TIME_RULE_TYPE_UNSPECIFIED = "DATE_TIME_RULE_TYPE_UNSPECIFIED"
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
class DateTimeRule:
    r"""DateTimeRule
    Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
    """
    
    type: Optional[DateTimeRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
