from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import invoicesummaryadditionalchargesummary
from . import amount


@dataclass_json
@dataclass
class InvoiceSummary:
    additional_charge_summaries: Optional[List[invoicesummaryadditionalchargesummary.InvoiceSummaryAdditionalChargeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalChargeSummaries' }})
    product_total: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTotal' }})
    
