from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testorderlineitemproduct
from . import orderlineitemreturninfo
from . import orderlineitemshippingdetails


@dataclass_json
@dataclass
class TestOrderLineItem:
    product: Optional[testorderlineitemproduct.TestOrderLineItemProduct] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    quantity_ordered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityOrdered' }})
    return_info: Optional[orderlineitemreturninfo.OrderLineItemReturnInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnInfo' }})
    shipping_details: Optional[orderlineitemshippingdetails.OrderLineItemShippingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingDetails' }})
    
