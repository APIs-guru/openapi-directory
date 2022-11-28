from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderreturnsRefundOperation:
    full_refund: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullRefund') }})
    partial_refund: Optional[OrderreturnsPartialRefund] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partialRefund') }})
    payment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentType') }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonText') }})
    return_refund_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnRefundReason') }})
    
