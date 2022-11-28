from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCourseMappingsOfferingIDPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCourseMappingsOfferingIDRequest:
    path_params: GetCourseMappingsOfferingIDPathParams = field()
    

@dataclass
class GetCourseMappingsOfferingIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_course_mappings_offering_id_200_application_json_strings: Optional[List[str]] = field(default=None)
    
