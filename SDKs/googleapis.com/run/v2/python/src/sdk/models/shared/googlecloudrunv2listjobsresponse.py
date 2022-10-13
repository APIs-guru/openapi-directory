from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2job


@dataclass_json
@dataclass
class GoogleCloudRunV2ListJobsResponse:
    jobs: Optional[List[googlecloudrunv2job.GoogleCloudRunV2Job]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
