from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import query_result_entry
from . import project


@dataclass_json
@dataclass
class QueryjobProjectResults:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    data: Optional[List[List[query_result_entry.QueryResultEntry]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    project: Optional[project.Project] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    
