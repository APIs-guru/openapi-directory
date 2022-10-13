from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphaworkerpool


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poolId' }})
    worker_pool: Optional[googledevtoolsremotebuildexecutionadminv1alphaworkerpool.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    
