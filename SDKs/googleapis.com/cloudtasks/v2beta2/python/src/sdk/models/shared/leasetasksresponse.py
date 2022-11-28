from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LeaseTasksResponse:
    r"""LeaseTasksResponse
    Response message for leasing tasks using LeaseTasks.
    """
    
    tasks: Optional[List[Task]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
