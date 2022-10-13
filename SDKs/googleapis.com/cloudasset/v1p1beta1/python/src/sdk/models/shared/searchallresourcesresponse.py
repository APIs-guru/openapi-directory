from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standardresourcemetadata


@dataclass_json
@dataclass
class SearchAllResourcesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    results: Optional[List[standardresourcemetadata.StandardResourceMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
