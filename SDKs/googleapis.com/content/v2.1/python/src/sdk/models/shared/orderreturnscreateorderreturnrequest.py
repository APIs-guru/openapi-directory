from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderreturnsCreateOrderReturnRequest:
    line_items: Optional[List[OrderreturnsLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    return_method_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethodType') }})
    
