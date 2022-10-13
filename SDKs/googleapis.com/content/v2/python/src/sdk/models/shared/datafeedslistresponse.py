from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafeed


@dataclass_json
@dataclass
class DatafeedsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resources: Optional[List[datafeed.Datafeed]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
