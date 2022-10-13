from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1task


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListTasksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tasks: Optional[List[googleclouddataplexv1task.GoogleCloudDataplexV1Task]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasks' }})
    unreachable_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachableLocations' }})
    
