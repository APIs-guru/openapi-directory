from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrderHeaderOrderStatusEnum(str, Enum):
    ACTIVE = "Active"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class OrderHeader:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number_of_line_items: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfLineItems') }})
    order_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderNumber') }})
    order_status: OrderHeaderOrderStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderStatus') }})
    
