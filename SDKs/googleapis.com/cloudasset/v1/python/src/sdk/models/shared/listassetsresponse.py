from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asset


@dataclass_json
@dataclass
class ListAssetsResponse:
    assets: Optional[List[asset.Asset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    
