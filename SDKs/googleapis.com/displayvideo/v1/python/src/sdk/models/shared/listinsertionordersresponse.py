from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insertionorder


@dataclass_json
@dataclass
class ListInsertionOrdersResponse:
    insertion_orders: Optional[List[insertionorder.InsertionOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertionOrders' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
