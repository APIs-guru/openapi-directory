from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import flight

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
    cap_cost_type: Optional[PricingCapCostTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capCostType' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    flights: Optional[List[flight.Flight]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flights' }})
    group_type: Optional[PricingGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupType' }})
    pricing_type: Optional[PricingPricingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingType' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
