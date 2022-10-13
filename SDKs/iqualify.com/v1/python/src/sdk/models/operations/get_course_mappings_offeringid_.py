from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCourseMappingsOfferingIDPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCourseMappingsOfferingIDRequest:
    path_params: GetCourseMappingsOfferingIDPathParams = field(default=None)
    

@dataclass
class GetCourseMappingsOfferingIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    get_course_mappings_offering_id_200_application_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
