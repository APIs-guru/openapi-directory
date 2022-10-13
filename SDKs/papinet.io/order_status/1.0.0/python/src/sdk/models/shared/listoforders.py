from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paginationlinks
from . import orderheader


@dataclass_json
@dataclass
class ListOfOrders:
    links: Optional[paginationlinks.PaginationLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    orders: Optional[List[orderheader.OrderHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orders' }})
    
