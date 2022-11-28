from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrdersReturnRefundLineItemRequest:
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    price_amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceAmount') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonText') }})
    tax_amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAmount') }})
    
