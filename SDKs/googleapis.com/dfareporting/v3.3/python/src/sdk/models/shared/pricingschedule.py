from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import pricingschedulepricingperiod

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
    cap_cost_option: Optional[PricingScheduleCapCostOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capCostOption' }})
    disregard_overdelivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disregardOverdelivery' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flighted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flighted' }})
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityId' }})
    pricing_periods: Optional[List[pricingschedulepricingperiod.PricingSchedulePricingPeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingPeriods' }})
    pricing_type: Optional[PricingSchedulePricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingType' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    testing_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
