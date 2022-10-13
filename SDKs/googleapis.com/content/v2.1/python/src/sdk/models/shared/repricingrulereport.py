from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import repricingrulereportbuyboxwinningrulestats
from . import date
from . import inapplicabilitydetails
from . import priceamount

class RepricingRuleReportTypeEnum(str, Enum):
    REPRICING_RULE_TYPE_UNSPECIFIED = "REPRICING_RULE_TYPE_UNSPECIFIED"
    TYPE_STATS_BASED = "TYPE_STATS_BASED"
    TYPE_COGS_BASED = "TYPE_COGS_BASED"
    TYPE_SALES_VOLUME_BASED = "TYPE_SALES_VOLUME_BASED"
    TYPE_COMPETITIVE_PRICE = "TYPE_COMPETITIVE_PRICE"


@dataclass_json
@dataclass
class RepricingRuleReport:
    buybox_winning_rule_stats: Optional[repricingrulereportbuyboxwinningrulestats.RepricingRuleReportBuyboxWinningRuleStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyboxWinningRuleStats' }})
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    impacted_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impactedProducts' }})
    inapplicability_details: Optional[List[inapplicabilitydetails.InapplicabilityDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inapplicabilityDetails' }})
    inapplicable_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inapplicableProducts' }})
    order_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderItemCount' }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleId' }})
    total_gmv: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalGmv' }})
    type: Optional[RepricingRuleReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
