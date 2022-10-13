from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bidder


@dataclass_json
@dataclass
class ListBiddersResponse:
    bidders: Optional[List[bidder.Bidder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidders' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
