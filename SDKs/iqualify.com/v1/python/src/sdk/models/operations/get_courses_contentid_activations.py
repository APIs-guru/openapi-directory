from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCoursesContentIDActivationsPathParams:
    content_id: str = field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCoursesContentIDActivationsRequest:
    path_params: GetCoursesContentIDActivationsPathParams = field()
    

@dataclass
class GetCoursesContentIDActivationsResponse:
    content_type: str = field()
    status_code: int = field()
    activation_response: Optional[shared.ActivationResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
