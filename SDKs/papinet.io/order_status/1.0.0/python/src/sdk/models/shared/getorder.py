from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import paginationlinks
from . import orderlineitem

class GetOrderOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class GetOrder:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[paginationlinks.PaginationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    number_of_line_items: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfLineItems' }})
    order_line_items: Optional[List[orderlineitem.OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderLineItems' }})
    order_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderNumber' }})
    order_status: GetOrderOrderStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderStatus' }})
    
