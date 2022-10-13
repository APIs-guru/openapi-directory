from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphaworkerpool


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest:
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    worker_pool: Optional[googledevtoolsremotebuildexecutionadminv1alphaworkerpool.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    
