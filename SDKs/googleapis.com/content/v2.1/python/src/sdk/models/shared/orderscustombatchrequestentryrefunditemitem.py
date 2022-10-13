from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import monetaryamount


@dataclass_json
@dataclass
class OrdersCustomBatchRequestEntryRefundItemItem:
    amount: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    full_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullRefund' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    
