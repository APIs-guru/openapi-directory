from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeaseWorkItemResponse:
    r"""LeaseWorkItemResponse
    Response to a request to lease WorkItems.
    """
    
    unified_worker_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unifiedWorkerResponse') }})
    work_items: Optional[List[WorkItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workItems') }})
    
