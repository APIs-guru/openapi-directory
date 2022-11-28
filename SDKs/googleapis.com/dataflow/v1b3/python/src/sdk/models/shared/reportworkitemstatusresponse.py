from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportWorkItemStatusResponse:
    r"""ReportWorkItemStatusResponse
    Response from a request to report the status of WorkItems.
    """
    
    unified_worker_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unifiedWorkerResponse') }})
    work_item_service_states: Optional[List[WorkItemServiceState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workItemServiceStates') }})
    
