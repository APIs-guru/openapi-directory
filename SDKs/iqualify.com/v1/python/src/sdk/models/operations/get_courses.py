from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCoursesResponse:
    content_type: str = field()
    status_code: int = field()
    course_responses: Optional[List[shared.CourseResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
