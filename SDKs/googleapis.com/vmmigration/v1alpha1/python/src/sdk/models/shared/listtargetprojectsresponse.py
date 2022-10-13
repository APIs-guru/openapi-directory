from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetproject


@dataclass_json
@dataclass
class ListTargetProjectsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    target_projects: Optional[List[targetproject.TargetProject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProjects' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
