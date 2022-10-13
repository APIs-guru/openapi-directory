from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCoursesContentIDPathParams:
    content_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCoursesContentIDRequest:
    path_params: GetCoursesContentIDPathParams = field(default=None)
    

@dataclass
class GetCoursesContentIDResponse:
    content_type: str = field(default=None)
    course_meta_response: Optional[shared.CourseMetaResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
