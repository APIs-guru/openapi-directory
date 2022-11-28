from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderreturnsProcessRequest:
    full_charge_return_shipping_cost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullChargeReturnShippingCost') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    refund_shipping_fee: Optional[OrderreturnsRefundOperation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundShippingFee') }})
    return_items: Optional[List[OrderreturnsReturnItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnItems') }})
    
