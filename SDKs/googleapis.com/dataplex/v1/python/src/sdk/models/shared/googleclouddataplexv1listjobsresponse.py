from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1job


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListJobsResponse:
    jobs: Optional[List[googleclouddataplexv1job.GoogleCloudDataplexV1Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
