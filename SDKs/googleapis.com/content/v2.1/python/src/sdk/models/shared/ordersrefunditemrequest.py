from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrdersRefundItemRequest:
    items: Optional[List[OrdersCustomBatchRequestEntryRefundItemItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonText') }})
    shipping: Optional[OrdersCustomBatchRequestEntryRefundItemShipping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping') }})
    
