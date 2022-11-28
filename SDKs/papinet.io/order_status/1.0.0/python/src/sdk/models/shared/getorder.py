from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GetOrderOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class GetOrder:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number_of_line_items: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfLineItems') }})
    order_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    order_status: GetOrderOrderStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderStatus') }})
    links: Optional[PaginationLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    order_line_items: Optional[List[OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLineItems') }})
    
