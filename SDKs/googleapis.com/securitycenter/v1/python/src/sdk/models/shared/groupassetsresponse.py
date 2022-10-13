from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupresult


@dataclass_json
@dataclass
class GroupAssetsResponse:
    group_by_results: Optional[List[groupresult.GroupResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupByResults' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
