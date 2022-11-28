from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkflowTemplatesResponse:
    r"""ListWorkflowTemplatesResponse
    A response to a request to list workflow templates in a project.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    templates: Optional[List[WorkflowTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    
