from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCourseMappingsExternalcourseExternalCourseIDPathParams:
    external_course_id: str = field(default=None, metadata={'path_param': { 'field_name': 'externalCourseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCourseMappingsExternalcourseExternalCourseIDRequest:
    path_params: GetCourseMappingsExternalcourseExternalCourseIDPathParams = field(default=None)
    

@dataclass
class GetCourseMappingsExternalcourseExternalCourseIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    get_course_mappings_externalcourse_external_course_id_200_application_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
