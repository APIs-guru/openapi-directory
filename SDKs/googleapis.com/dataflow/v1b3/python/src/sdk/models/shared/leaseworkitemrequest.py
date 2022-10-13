from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LeaseWorkItemRequest:
    current_worker_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentWorkerTime' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    requested_lease_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedLeaseDuration' }})
    unified_worker_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unifiedWorkerRequest' }})
    work_item_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workItemTypes' }})
    worker_capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerCapabilities' }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerId' }})
    
