from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnPricingInfo:
    charge_return_shipping_fee: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeReturnShippingFee') }})
    max_return_shipping_fee: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxReturnShippingFee') }})
    refundable_items_total_amount: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundableItemsTotalAmount') }})
    refundable_shipping_amount: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundableShippingAmount') }})
    total_refunded_amount: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalRefundedAmount') }})
    
