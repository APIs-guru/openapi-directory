from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InvoiceSummary:
    additional_charge_summaries: Optional[List[InvoiceSummaryAdditionalChargeSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalChargeSummaries') }})
    customer_balance: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerBalance') }})
    google_balance: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleBalance') }})
    merchant_balance: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantBalance') }})
    product_total: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTotal') }})
    promotion_summaries: Optional[List[Promotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSummaries') }})
    
