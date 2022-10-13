from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import monetaryamount
from . import monetaryamount
from . import monetaryamount
from . import monetaryamount


@dataclass_json
@dataclass
class ReturnPricingInfo:
    charge_return_shipping_fee: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargeReturnShippingFee' }})
    max_return_shipping_fee: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxReturnShippingFee' }})
    refundable_items_total_amount: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundableItemsTotalAmount' }})
    refundable_shipping_amount: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundableShippingAmount' }})
    total_refunded_amount: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRefundedAmount' }})
    
