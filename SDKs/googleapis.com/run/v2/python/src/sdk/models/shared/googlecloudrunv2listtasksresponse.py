from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2ListTasksResponse:
    r"""GoogleCloudRunV2ListTasksResponse
    Response message containing a list of Tasks.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tasks: Optional[List[GoogleCloudRunV2Task]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
