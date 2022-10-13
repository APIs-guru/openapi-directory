from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__job


@dataclass_json
@dataclass
class GoogleCloudMlV1ListJobsResponse:
    jobs: Optional[List[googlecloudmlv1__job.GoogleCloudMlV1Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
