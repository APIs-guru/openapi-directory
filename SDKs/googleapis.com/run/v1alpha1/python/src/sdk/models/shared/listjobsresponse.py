from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import job
from . import listmeta


@dataclass_json
@dataclass
class ListJobsResponse:
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiVersion' }})
    items: Optional[List[job.Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[listmeta.ListMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
