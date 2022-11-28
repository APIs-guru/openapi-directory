from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutCourseMappingsOfferingIDExternalCourseIDPathParams:
    external_course_id: str = field(metadata={'path_param': { 'field_name': 'externalCourseId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCourseMappingsOfferingIDExternalCourseIDRequest:
    path_params: PutCourseMappingsOfferingIDExternalCourseIDPathParams = field()
    

@dataclass
class PutCourseMappingsOfferingIDExternalCourseIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    put_course_mappings_offering_id_external_course_id_200_application_json_strings: Optional[List[str]] = field(default=None)
    
