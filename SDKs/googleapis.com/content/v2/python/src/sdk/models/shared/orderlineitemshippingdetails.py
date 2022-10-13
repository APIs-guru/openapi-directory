from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderlineitemshippingdetailsmethod


@dataclass_json
@dataclass
class OrderLineItemShippingDetails:
    deliver_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliverByDate' }})
    method: Optional[orderlineitemshippingdetailsmethod.OrderLineItemShippingDetailsMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    ship_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipByDate' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
