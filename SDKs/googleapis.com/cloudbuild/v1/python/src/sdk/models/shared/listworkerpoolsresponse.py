from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListWorkerPoolsResponse:
    r"""ListWorkerPoolsResponse
    Response containing existing `WorkerPools`.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    worker_pools: Optional[List[WorkerPool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPools') }})
    
