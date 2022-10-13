from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guaranteedorder


@dataclass_json
@dataclass
class ListGuaranteedOrdersResponse:
    guaranteed_orders: Optional[List[guaranteedorder.GuaranteedOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guaranteedOrders' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
