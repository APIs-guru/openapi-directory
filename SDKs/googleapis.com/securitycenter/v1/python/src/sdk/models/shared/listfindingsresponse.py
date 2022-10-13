from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listfindingsresult


@dataclass_json
@dataclass
class ListFindingsResponse:
    list_findings_results: Optional[List[listfindingsresult.ListFindingsResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listFindingsResults' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
