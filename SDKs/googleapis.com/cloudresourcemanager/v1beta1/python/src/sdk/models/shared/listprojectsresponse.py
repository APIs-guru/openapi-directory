from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import project


@dataclass_json
@dataclass
class ListProjectsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    projects: Optional[List[project.Project]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projects' }})
    
