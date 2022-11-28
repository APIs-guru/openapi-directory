from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPatchJobInstanceDetailsResponse:
    r"""ListPatchJobInstanceDetailsResponse
    A response message for listing the instances details for a patch job.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    patch_job_instance_details: Optional[List[PatchJobInstanceDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchJobInstanceDetails') }})
    
