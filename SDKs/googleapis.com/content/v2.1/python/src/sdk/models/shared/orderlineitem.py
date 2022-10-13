from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlineitemadjustment
from . import ordermerchantprovidedannotation
from . import ordercancellation
from . import price
from . import orderlineitemproduct
from . import orderlineitemreturninfo
from . import orderreturn
from . import orderlineitemshippingdetails
from . import price


@dataclass_json
@dataclass
class OrderLineItem:
    adjustments: Optional[List[orderlineitemadjustment.OrderLineItemAdjustment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustments' }})
    annotations: Optional[List[ordermerchantprovidedannotation.OrderMerchantProvidedAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    cancellations: Optional[List[ordercancellation.OrderCancellation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellations' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product: Optional[orderlineitemproduct.OrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    quantity_canceled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityCanceled' }})
    quantity_delivered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityDelivered' }})
    quantity_ordered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityOrdered' }})
    quantity_pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityPending' }})
    quantity_ready_for_pickup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityReadyForPickup' }})
    quantity_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityReturned' }})
    quantity_shipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityShipped' }})
    quantity_undeliverable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityUndeliverable' }})
    return_info: Optional[orderlineitemreturninfo.OrderLineItemReturnInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnInfo' }})
    returns: Optional[List[orderreturn.OrderReturn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returns' }})
    shipping_details: Optional[orderlineitemshippingdetails.OrderLineItemShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingDetails' }})
    tax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    
