from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCoursesResponse:
    r"""ListCoursesResponse
    Response when listing courses.
    """
    
    courses: Optional[List[Course]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courses') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
