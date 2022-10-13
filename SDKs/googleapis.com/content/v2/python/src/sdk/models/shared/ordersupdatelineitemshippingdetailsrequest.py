from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrdersUpdateLineItemShippingDetailsRequest:
    deliver_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliverByDate' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    ship_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipByDate' }})
    
