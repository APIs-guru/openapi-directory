from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflowtemplate


@dataclass_json
@dataclass
class ListWorkflowTemplatesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    templates: Optional[List[workflowtemplate.WorkflowTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templates' }})
    
