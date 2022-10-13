from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listassetsresult


@dataclass_json
@dataclass
class ListAssetsResponse:
    list_assets_results: Optional[List[listassetsresult.ListAssetsResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listAssetsResults' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
