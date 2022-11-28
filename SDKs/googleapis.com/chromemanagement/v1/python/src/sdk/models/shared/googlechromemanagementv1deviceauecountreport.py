from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum(str, Enum):
    MONTH_UNSPECIFIED = "MONTH_UNSPECIFIED"
    JANUARY = "JANUARY"
    FEBRUARY = "FEBRUARY"
    MARCH = "MARCH"
    APRIL = "APRIL"
    MAY = "MAY"
    JUNE = "JUNE"
    JULY = "JULY"
    AUGUST = "AUGUST"
    SEPTEMBER = "SEPTEMBER"
    OCTOBER = "OCTOBER"
    NOVEMBER = "NOVEMBER"
    DECEMBER = "DECEMBER"


@dataclass_json
@dataclass
class GoogleChromeManagementV1DeviceAueCountReport:
    r"""GoogleChromeManagementV1DeviceAueCountReport
    Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.
    """
    
    aue_month: Optional[GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aueMonth') }})
    aue_year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aueYear') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
