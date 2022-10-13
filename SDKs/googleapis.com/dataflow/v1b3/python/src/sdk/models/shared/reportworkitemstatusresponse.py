from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import workitemservicestate


@dataclass_json
@dataclass
class ReportWorkItemStatusResponse:
    unified_worker_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unifiedWorkerResponse' }})
    work_item_service_states: Optional[List[workitemservicestate.WorkItemServiceState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workItemServiceStates' }})
    
