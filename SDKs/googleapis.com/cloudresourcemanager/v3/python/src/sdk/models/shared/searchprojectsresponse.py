from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchProjectsResponse:
    r"""SearchProjectsResponse
    A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    projects: Optional[List[Project]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    
