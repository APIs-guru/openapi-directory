from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class OrdersCustomBatchRequestEntryRefundItemShipping:
    amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    full_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullRefund' }})
    
