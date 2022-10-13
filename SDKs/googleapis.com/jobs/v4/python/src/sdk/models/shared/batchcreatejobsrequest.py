from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import job


@dataclass_json
@dataclass
class BatchCreateJobsRequest:
    jobs: Optional[List[job.Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    
