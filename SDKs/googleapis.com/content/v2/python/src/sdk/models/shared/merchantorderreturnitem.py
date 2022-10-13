from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customerreturnreason
from . import refundreason
from . import orderlineitemproduct


@dataclass_json
@dataclass
class MerchantOrderReturnItem:
    customer_return_reason: Optional[customerreturnreason.CustomerReturnReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerReturnReason' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    merchant_return_reason: Optional[refundreason.RefundReason] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantReturnReason' }})
    product: Optional[orderlineitemproduct.OrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    return_shipment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnShipmentIds' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
