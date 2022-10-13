from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderscustombatchrequestentryrefunditemitem
from . import orderscustombatchrequestentryrefunditemshipping


@dataclass_json
@dataclass
class OrdersRefundItemRequest:
    items: Optional[List[orderscustombatchrequestentryrefunditemitem.OrdersCustomBatchRequestEntryRefundItemItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    reason_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonText' }})
    shipping: Optional[orderscustombatchrequestentryrefunditemshipping.OrdersCustomBatchRequestEntryRefundItemShipping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping' }})
    
