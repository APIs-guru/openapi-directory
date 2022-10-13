from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workerpool


@dataclass_json
@dataclass
class ListWorkerPoolsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    worker_pools: Optional[List[workerpool.WorkerPool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPools' }})
    
