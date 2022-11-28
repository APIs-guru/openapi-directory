from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StageExecutionDetails:
    r"""StageExecutionDetails
    Information about the workers and work items within a stage.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    workers: Optional[List[WorkerDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workers') }})
    
