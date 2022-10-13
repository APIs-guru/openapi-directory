from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphaworkerpool


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse:
    worker_pools: Optional[List[googledevtoolsremotebuildexecutionadminv1alphaworkerpool.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPools' }})
    
