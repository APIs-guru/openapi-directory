from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkerDetails:
    r"""WorkerDetails
    Information about a worker
    """
    
    work_items: Optional[List[WorkItemDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workItems') }})
    worker_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerName') }})
    
