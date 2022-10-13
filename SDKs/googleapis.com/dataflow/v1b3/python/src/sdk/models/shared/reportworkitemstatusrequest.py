from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import workitemstatus


@dataclass_json
@dataclass
class ReportWorkItemStatusRequest:
    current_worker_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentWorkerTime' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    unified_worker_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unifiedWorkerRequest' }})
    work_item_statuses: Optional[List[workitemstatus.WorkItemStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workItemStatuses' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerId' }})
    
