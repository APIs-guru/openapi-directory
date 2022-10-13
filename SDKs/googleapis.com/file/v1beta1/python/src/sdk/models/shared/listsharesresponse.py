from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import share


@dataclass_json
@dataclass
class ListSharesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    shares: Optional[List[share.Share]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shares' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
