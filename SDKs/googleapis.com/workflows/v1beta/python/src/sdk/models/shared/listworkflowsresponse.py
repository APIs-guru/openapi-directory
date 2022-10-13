from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflow


@dataclass_json
@dataclass
class ListWorkflowsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    workflows: Optional[List[workflow.Workflow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflows' }})
    
