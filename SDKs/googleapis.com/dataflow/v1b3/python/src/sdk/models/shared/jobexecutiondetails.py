from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobExecutionDetails:
    r"""JobExecutionDetails
    Information about the execution of a job.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    stages: Optional[List[StageSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    
