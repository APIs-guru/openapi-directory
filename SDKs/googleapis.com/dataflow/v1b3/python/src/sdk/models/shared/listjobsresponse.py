from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failedlocation
from . import job


@dataclass_json
@dataclass
class ListJobsResponse:
    failed_location: Optional[List[failedlocation.FailedLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedLocation' }})
    jobs: Optional[List[job.Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
