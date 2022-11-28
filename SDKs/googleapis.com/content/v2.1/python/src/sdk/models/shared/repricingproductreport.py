from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RepricingProductReportTypeEnum(str, Enum):
    REPRICING_RULE_TYPE_UNSPECIFIED = "REPRICING_RULE_TYPE_UNSPECIFIED"
    TYPE_STATS_BASED = "TYPE_STATS_BASED"
    TYPE_COGS_BASED = "TYPE_COGS_BASED"
    TYPE_SALES_VOLUME_BASED = "TYPE_SALES_VOLUME_BASED"
    TYPE_COMPETITIVE_PRICE = "TYPE_COMPETITIVE_PRICE"


@dataclass_json
@dataclass
class RepricingProductReport:
    r"""RepricingProductReport
    Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
    """
    
    application_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationCount') }})
    buybox_winning_product_stats: Optional[RepricingProductReportBuyboxWinningProductStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyboxWinningProductStats') }})
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    high_watermark: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highWatermark') }})
    inapplicability_details: Optional[List[InapplicabilityDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inapplicabilityDetails') }})
    low_watermark: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowWatermark') }})
    order_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItemCount') }})
    rule_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleIds') }})
    total_gmv: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalGmv') }})
    type: Optional[RepricingProductReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
