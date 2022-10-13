from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import process


@dataclass_json
@dataclass
class ProjectRequest:
    file_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_id' }})
    process: Optional[process.Process] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'process' }})
    project_title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_title' }})
    
