from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class InvoiceSummaryAdditionalChargeSummary:
    total_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalAmount' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
