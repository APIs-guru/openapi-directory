from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customerreturnreason
from . import merchantrejectionreason
from . import refundreason
from . import orderlineitemproduct
from . import monetaryamount


@dataclass_json
@dataclass
class MerchantOrderReturnItem:
    customer_return_reason: Optional[customerreturnreason.CustomerReturnReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerReturnReason' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    merchant_rejection_reason: Optional[merchantrejectionreason.MerchantRejectionReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantRejectionReason' }})
    merchant_return_reason: Optional[refundreason.RefundReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantReturnReason' }})
    product: Optional[orderlineitemproduct.OrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    refundable_amount: Optional[monetaryamount.MonetaryAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundableAmount' }})
    return_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnItemId' }})
    return_shipment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShipmentIds' }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentGroupId' }})
    shipment_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentUnitId' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
