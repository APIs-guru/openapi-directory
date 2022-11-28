from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCloneJobsResponse:
    r"""ListCloneJobsResponse
    Response message for 'ListCloneJobs' request.
    """
    
    clone_jobs: Optional[List[CloneJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloneJobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
