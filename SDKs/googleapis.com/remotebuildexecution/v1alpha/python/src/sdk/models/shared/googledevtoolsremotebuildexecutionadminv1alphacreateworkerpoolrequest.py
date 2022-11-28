from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest
    The request used for `CreateWorkerPool`.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolId') }})
    worker_pool: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    
