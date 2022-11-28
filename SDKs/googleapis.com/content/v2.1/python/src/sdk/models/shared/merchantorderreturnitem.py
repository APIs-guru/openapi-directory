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
    merchant_rejection_reason: Optional[MerchantRejectionReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantRejectionReason') }})
    merchant_return_reason: Optional[RefundReason] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantReturnReason') }})
    product: Optional[OrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    refundable_amount: Optional[MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundableAmount') }})
    return_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnItemId') }})
    return_shipment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnShipmentIds') }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentGroupId') }})
    shipment_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentUnitId') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
