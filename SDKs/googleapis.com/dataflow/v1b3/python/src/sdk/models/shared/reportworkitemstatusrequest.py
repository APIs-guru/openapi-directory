from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportWorkItemStatusRequest:
    r"""ReportWorkItemStatusRequest
    Request to report the status of WorkItems.
    """
    
    current_worker_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentWorkerTime') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    unified_worker_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unifiedWorkerRequest') }})
    work_item_statuses: Optional[List[WorkItemStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workItemStatuses') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerId') }})
    
