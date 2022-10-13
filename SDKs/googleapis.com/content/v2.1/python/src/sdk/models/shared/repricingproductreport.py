from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import repricingproductreportbuyboxwinningproductstats
from . import date
from . import priceamount
from . import inapplicabilitydetails
from . import priceamount
from . import priceamount

class RepricingProductReportTypeEnum(str, Enum):
    REPRICING_RULE_TYPE_UNSPECIFIED = "REPRICING_RULE_TYPE_UNSPECIFIED"
    TYPE_STATS_BASED = "TYPE_STATS_BASED"
    TYPE_COGS_BASED = "TYPE_COGS_BASED"
    TYPE_SALES_VOLUME_BASED = "TYPE_SALES_VOLUME_BASED"
    TYPE_COMPETITIVE_PRICE = "TYPE_COMPETITIVE_PRICE"


@dataclass_json
@dataclass
class RepricingProductReport:
    application_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationCount' }})
    buybox_winning_product_stats: Optional[repricingproductreportbuyboxwinningproductstats.RepricingProductReportBuyboxWinningProductStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyboxWinningProductStats' }})
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    high_watermark: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highWatermark' }})
    inapplicability_details: Optional[List[inapplicabilitydetails.InapplicabilityDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inapplicabilityDetails' }})
    low_watermark: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowWatermark' }})
    order_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderItemCount' }})
    rule_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleIds' }})
    total_gmv: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalGmv' }})
    type: Optional[RepricingProductReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
