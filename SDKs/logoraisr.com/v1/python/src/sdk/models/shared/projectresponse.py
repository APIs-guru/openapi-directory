from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProjectResponse:
    project_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_id' }})
    project_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_number' }})
    result_file_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_file_id' }})
    
