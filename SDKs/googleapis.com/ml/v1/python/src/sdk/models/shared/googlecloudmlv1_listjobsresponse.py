from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ListJobsResponse:
    r"""GoogleCloudMlV1ListJobsResponse
    Response message for the ListJobs method.
    """
    
    jobs: Optional[List[GoogleCloudMlV1Job]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
