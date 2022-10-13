from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import project


@dataclass_json
@dataclass
class ProjectList:
    data: Optional[List[project.Project]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageUrl' }})
    
