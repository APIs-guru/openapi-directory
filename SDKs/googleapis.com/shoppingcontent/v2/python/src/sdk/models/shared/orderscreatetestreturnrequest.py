from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderscustombatchrequestentrycreatetestreturnreturnitem


@dataclass_json
@dataclass
class OrdersCreateTestReturnRequest:
    items: Optional[List[orderscustombatchrequestentrycreatetestreturnreturnitem.OrdersCustomBatchRequestEntryCreateTestReturnReturnItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
