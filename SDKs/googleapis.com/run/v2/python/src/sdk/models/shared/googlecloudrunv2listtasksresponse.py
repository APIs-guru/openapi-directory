from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2task


@dataclass_json
@dataclass
class GoogleCloudRunV2ListTasksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tasks: Optional[List[googlecloudrunv2task.GoogleCloudRunV2Task]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    
