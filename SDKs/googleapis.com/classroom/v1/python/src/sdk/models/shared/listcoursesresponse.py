from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import course


@dataclass_json
@dataclass
class ListCoursesResponse:
    courses: Optional[List[course.Course]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'courses' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
