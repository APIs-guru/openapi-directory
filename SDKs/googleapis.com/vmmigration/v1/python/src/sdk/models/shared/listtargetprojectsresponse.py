from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTargetProjectsResponse:
    r"""ListTargetProjectsResponse
    Response message for 'ListTargetProjects' call.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    target_projects: Optional[List[TargetProject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProjects') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
