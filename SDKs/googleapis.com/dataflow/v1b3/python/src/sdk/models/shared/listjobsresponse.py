from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListJobsResponse:
    r"""ListJobsResponse
    Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
    """
    
    failed_location: Optional[List[FailedLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedLocation') }})
    jobs: Optional[List[Job]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
