from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workitemdetails


@dataclass_json
@dataclass
class WorkerDetails:
    work_items: Optional[List[workitemdetails.WorkItemDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workItems' }})
    worker_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerName' }})
    
