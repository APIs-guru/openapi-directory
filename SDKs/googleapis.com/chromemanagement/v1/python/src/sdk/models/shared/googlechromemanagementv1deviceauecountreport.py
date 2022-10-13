from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    aue_month: Optional[GoogleChromeManagementV1DeviceAueCountReportAueMonthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aueMonth' }})
    aue_year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aueYear' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    
