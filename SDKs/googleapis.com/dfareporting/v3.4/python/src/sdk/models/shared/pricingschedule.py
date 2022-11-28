from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PricingScheduleCapCostOptionEnum(str, Enum):
    CAP_COST_NONE = "CAP_COST_NONE"
    CAP_COST_MONTHLY = "CAP_COST_MONTHLY"
    CAP_COST_CUMULATIVE = "CAP_COST_CUMULATIVE"

class PricingSchedulePricingTypeEnum(str, Enum):
    PRICING_TYPE_CPM = "PRICING_TYPE_CPM"
    PRICING_TYPE_CPC = "PRICING_TYPE_CPC"
    PRICING_TYPE_CPA = "PRICING_TYPE_CPA"
    PRICING_TYPE_FLAT_RATE_IMPRESSIONS = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    PRICING_TYPE_FLAT_RATE_CLICKS = "PRICING_TYPE_FLAT_RATE_CLICKS"
    PRICING_TYPE_CPM_ACTIVEVIEW = "PRICING_TYPE_CPM_ACTIVEVIEW"


@dataclass_json
@dataclass
class PricingSchedule:
    r"""PricingSchedule
    Pricing Schedule
    """
    
    cap_cost_option: Optional[PricingScheduleCapCostOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capCostOption') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flighted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flighted') }})
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityId') }})
    pricing_periods: Optional[List[PricingSchedulePricingPeriod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingPeriods') }})
    pricing_type: Optional[PricingSchedulePricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingType') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    testing_start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingStartDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
