from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lineitem


@dataclass_json
@dataclass
class ListLineItemsResponse:
    line_items: Optional[List[lineitem.LineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
