from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import execution


@dataclass_json
@dataclass
class ListExecutionsResponse:
    executions: Optional[List[execution.Execution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
