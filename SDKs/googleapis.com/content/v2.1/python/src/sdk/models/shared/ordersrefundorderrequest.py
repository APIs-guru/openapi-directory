from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import monetaryamount


@dataclass_json
@dataclass
class OrdersRefundOrderRequest:
    amount: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    full_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullRefund' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    
