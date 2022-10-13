from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clonejob


@dataclass_json
@dataclass
class ListCloneJobsResponse:
    clone_jobs: Optional[List[clonejob.CloneJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloneJobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
