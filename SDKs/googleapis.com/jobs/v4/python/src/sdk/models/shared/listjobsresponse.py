from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import job
from . import responsemetadata


@dataclass_json
@dataclass
class ListJobsResponse:
    jobs: Optional[List[job.Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    metadata: Optional[responsemetadata.ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
