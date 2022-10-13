from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price
from . import price
from . import price


@dataclass_json
@dataclass
class OrdersRefundRequest:
    amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    amount_pretax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountPretax' }})
    amount_tax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountTax' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    
