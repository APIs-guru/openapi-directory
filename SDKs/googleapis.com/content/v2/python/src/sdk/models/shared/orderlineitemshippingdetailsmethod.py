from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderLineItemShippingDetailsMethod:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    max_days_in_transit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDaysInTransit' }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodName' }})
    min_days_in_transit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minDaysInTransit' }})
    
