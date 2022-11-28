from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestOrderLineItem:
    product: Optional[TestOrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    quantity_ordered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityOrdered') }})
    return_info: Optional[OrderLineItemReturnInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnInfo') }})
    shipping_details: Optional[OrderLineItemShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingDetails') }})
    
