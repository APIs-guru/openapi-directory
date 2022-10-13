from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import invoicesummaryadditionalchargesummary
from . import amount
from . import amount
from . import amount
from . import amount
from . import promotion


@dataclass_json
@dataclass
class InvoiceSummary:
    additional_charge_summaries: Optional[List[invoicesummaryadditionalchargesummary.InvoiceSummaryAdditionalChargeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalChargeSummaries' }})
    customer_balance: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerBalance' }})
    google_balance: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleBalance' }})
    merchant_balance: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantBalance' }})
    product_total: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTotal' }})
    promotion_summaries: Optional[List[promotion.Promotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionSummaries' }})
    
