from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTransferJobsResponse:
    r"""ListTransferJobsResponse
    Response from ListTransferJobs.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    transfer_jobs: Optional[List[TransferJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferJobs') }})
    
