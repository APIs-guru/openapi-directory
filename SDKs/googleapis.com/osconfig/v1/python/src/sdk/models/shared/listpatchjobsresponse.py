from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPatchJobsResponse:
    r"""ListPatchJobsResponse
    A response message for listing patch jobs.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    patch_jobs: Optional[List[PatchJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchJobs') }})
    
