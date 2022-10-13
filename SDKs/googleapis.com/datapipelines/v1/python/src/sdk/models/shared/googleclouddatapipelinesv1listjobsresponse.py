from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1job


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1ListJobsResponse:
    jobs: Optional[List[googleclouddatapipelinesv1job.GoogleCloudDatapipelinesV1Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
