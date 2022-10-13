from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buyer


@dataclass_json
@dataclass
class ListBuyersResponse:
    buyers: Optional[List[buyer.Buyer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
