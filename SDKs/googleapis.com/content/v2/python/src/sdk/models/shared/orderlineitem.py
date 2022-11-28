from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderLineItem:
    annotations: Optional[List[OrderMerchantProvidedAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    cancellations: Optional[List[OrderCancellation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellations') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    product: Optional[OrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity_canceled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityCanceled') }})
    quantity_delivered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityDelivered') }})
    quantity_ordered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityOrdered') }})
    quantity_pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityPending') }})
    quantity_ready_for_pickup: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityReadyForPickup') }})
    quantity_returned: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityReturned') }})
    quantity_shipped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityShipped') }})
    return_info: Optional[OrderLineItemReturnInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnInfo') }})
    returns: Optional[List[OrderReturn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returns') }})
    shipping_details: Optional[OrderLineItemShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingDetails') }})
    tax: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    
