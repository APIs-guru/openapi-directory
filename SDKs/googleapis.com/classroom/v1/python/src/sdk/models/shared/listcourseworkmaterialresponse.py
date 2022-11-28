from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCourseWorkMaterialResponse:
    r"""ListCourseWorkMaterialResponse
    Response when listing course work material.
    """
    
    course_work_material: Optional[List[CourseWorkMaterial]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('courseWorkMaterial') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
