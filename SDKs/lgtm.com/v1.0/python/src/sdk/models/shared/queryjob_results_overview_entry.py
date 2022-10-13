from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import project

class QueryjobResultsOverviewEntryStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class QueryjobResultsOverviewEntry:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    external: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external' }})
    internal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal' }})
    project: Optional[project.Project] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    status: Optional[QueryjobResultsOverviewEntryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
