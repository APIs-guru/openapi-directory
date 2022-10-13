from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class OrderHeaderOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class OrderHeader:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    number_of_line_items: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfLineItems' }})
    order_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderNumber' }})
    order_status: OrderHeaderOrderStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderStatus' }})
    
