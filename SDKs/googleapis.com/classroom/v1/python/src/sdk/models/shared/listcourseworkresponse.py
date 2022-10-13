from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import coursework


@dataclass_json
@dataclass
class ListCourseWorkResponse:
    course_work: Optional[List[coursework.CourseWork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courseWork' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
