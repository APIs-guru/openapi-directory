from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workerdetails


@dataclass_json
@dataclass
class StageExecutionDetails:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    workers: Optional[List[workerdetails.WorkerDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workers' }})
    
