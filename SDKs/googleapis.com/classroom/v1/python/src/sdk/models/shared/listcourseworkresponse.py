from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCourseWorkResponse:
    r"""ListCourseWorkResponse
    Response when listing course work.
    """
    
    course_work: Optional[List[CourseWork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWork') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
