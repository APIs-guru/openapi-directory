from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PricingCapCostTypeEnum(str, Enum):
    PLANNING_PLACEMENT_CAP_COST_TYPE_NONE = "PLANNING_PLACEMENT_CAP_COST_TYPE_NONE"
    PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY = "PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY"
    PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE = "PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE"

class PricingGroupTypeEnum(str, Enum):
    PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE = "PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE"
    PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK = "PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK"

class PricingPricingTypeEnum(str, Enum):
    PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS = "PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS"
    PLANNING_PLACEMENT_PRICING_TYPE_CPM = "PLANNING_PLACEMENT_PRICING_TYPE_CPM"
    PLANNING_PLACEMENT_PRICING_TYPE_CLICKS = "PLANNING_PLACEMENT_PRICING_TYPE_CLICKS"
    PLANNING_PLACEMENT_PRICING_TYPE_CPC = "PLANNING_PLACEMENT_PRICING_TYPE_CPC"
    PLANNING_PLACEMENT_PRICING_TYPE_CPA = "PLANNING_PLACEMENT_PRICING_TYPE_CPA"
    PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS"
    PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS = "PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS"
    PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW = "PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW"


@dataclass_json
@dataclass
class Pricing:
    r"""Pricing
    Pricing Information
    """
    
    cap_cost_type: Optional[PricingCapCostTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capCostType') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flights: Optional[List[Flight]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flights') }})
    group_type: Optional[PricingGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupType') }})
    pricing_type: Optional[PricingPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingType') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
