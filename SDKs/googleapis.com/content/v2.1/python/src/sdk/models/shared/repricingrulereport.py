from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RepricingRuleReportTypeEnum(str, Enum):
    REPRICING_RULE_TYPE_UNSPECIFIED = "REPRICING_RULE_TYPE_UNSPECIFIED"
    TYPE_STATS_BASED = "TYPE_STATS_BASED"
    TYPE_COGS_BASED = "TYPE_COGS_BASED"
    TYPE_SALES_VOLUME_BASED = "TYPE_SALES_VOLUME_BASED"
    TYPE_COMPETITIVE_PRICE = "TYPE_COMPETITIVE_PRICE"


@dataclass_json
@dataclass
class RepricingRuleReport:
    r"""RepricingRuleReport
    Resource that represents a daily Repricing rule report. Next ID: 11
    """
    
    buybox_winning_rule_stats: Optional[RepricingRuleReportBuyboxWinningRuleStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyboxWinningRuleStats') }})
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    impacted_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impactedProducts') }})
    inapplicability_details: Optional[List[InapplicabilityDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inapplicabilityDetails') }})
    inapplicable_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inapplicableProducts') }})
    order_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItemCount') }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    total_gmv: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalGmv') }})
    type: Optional[RepricingRuleReportTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
