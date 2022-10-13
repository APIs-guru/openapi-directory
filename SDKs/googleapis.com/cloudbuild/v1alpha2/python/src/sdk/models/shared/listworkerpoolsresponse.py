from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workerpool


@dataclass_json
@dataclass
class ListWorkerPoolsResponse:
    worker_pools: Optional[List[workerpool.WorkerPool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPools' }})
    
