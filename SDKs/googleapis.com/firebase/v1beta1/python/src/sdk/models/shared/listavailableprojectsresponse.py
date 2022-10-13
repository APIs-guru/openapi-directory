from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import projectinfo


@dataclass_json
@dataclass
class ListAvailableProjectsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    project_info: Optional[List[projectinfo.ProjectInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectInfo' }})
    
