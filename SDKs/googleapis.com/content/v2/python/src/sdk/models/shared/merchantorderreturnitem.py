from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MerchantOrderReturnItem:
    customer_return_reason: Optional[CustomerReturnReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerReturnReason') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    merchant_return_reason: Optional[RefundReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantReturnReason') }})
    product: Optional[OrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    return_shipment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShipmentIds') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
