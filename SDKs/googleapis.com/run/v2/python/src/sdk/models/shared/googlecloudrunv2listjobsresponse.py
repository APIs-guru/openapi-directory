from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2ListJobsResponse:
    r"""GoogleCloudRunV2ListJobsResponse
    Response message containing a list of Jobs.
    """
    
    jobs: Optional[List[GoogleCloudRunV2Job]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
