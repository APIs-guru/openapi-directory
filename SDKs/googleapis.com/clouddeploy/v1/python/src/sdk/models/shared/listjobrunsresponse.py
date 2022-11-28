from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobRunsResponse:
    r"""ListJobRunsResponse
    ListJobRunsResponse is the response object returned by `ListJobRuns`.
    """
    
    job_runs: Optional[List[JobRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobRuns') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
