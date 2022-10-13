from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderreturnspartialrefund


@dataclass_json
@dataclass
class OrderreturnsRefundOperation:
    full_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullRefund' }})
    partial_refund: Optional[orderreturnspartialrefund.OrderreturnsPartialRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialRefund' }})
    payment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentType' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    return_refund_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnRefundReason' }})
    
