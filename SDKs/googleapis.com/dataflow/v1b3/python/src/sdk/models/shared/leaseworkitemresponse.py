from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import workitem


@dataclass_json
@dataclass
class LeaseWorkItemResponse:
    unified_worker_response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unifiedWorkerResponse' }})
    work_items: Optional[List[workitem.WorkItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workItems' }})
    
