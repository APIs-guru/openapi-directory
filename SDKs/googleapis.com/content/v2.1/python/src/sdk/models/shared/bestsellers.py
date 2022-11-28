from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BestSellersPreviousRelativeDemandEnum(str, Enum):
    RELATIVE_DEMAND_UNSPECIFIED = "RELATIVE_DEMAND_UNSPECIFIED"
    VERY_LOW = "VERY_LOW"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    VERY_HIGH = "VERY_HIGH"

class BestSellersRelativeDemandEnum(str, Enum):
    RELATIVE_DEMAND_UNSPECIFIED = "RELATIVE_DEMAND_UNSPECIFIED"
    VERY_LOW = "VERY_LOW"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    VERY_HIGH = "VERY_HIGH"

class BestSellersRelativeDemandChangeEnum(str, Enum):
    RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED = "RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED"
    SINKER = "SINKER"
    FLAT = "FLAT"
    RISER = "RISER"

class BestSellersReportGranularityEnum(str, Enum):
    REPORT_GRANULARITY_UNSPECIFIED = "REPORT_GRANULARITY_UNSPECIFIED"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"


@dataclass_json
@dataclass
class BestSellers:
    r"""BestSellers
    Fields related to the [Best Sellers reports](https://support.google.com/merchants/answer/9488679).
    """
    
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    previous_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousRank') }})
    previous_relative_demand: Optional[BestSellersPreviousRelativeDemandEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousRelativeDemand') }})
    rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    relative_demand: Optional[BestSellersRelativeDemandEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDemand') }})
    relative_demand_change: Optional[BestSellersRelativeDemandChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeDemandChange') }})
    report_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportDate') }})
    report_granularity: Optional[BestSellersReportGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportGranularity') }})
    
