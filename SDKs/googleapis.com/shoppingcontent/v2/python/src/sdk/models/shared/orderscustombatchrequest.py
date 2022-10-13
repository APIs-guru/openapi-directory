from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderscustombatchrequestentry


@dataclass_json
@dataclass
class OrdersCustomBatchRequest:
    entries: Optional[List[orderscustombatchrequestentry.OrdersCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    
