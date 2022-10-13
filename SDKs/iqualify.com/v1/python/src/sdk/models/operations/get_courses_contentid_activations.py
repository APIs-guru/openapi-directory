from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCoursesContentIDActivationsPathParams:
    content_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCoursesContentIDActivationsRequest:
    path_params: GetCoursesContentIDActivationsPathParams = field(default=None)
    

@dataclass
class GetCoursesContentIDActivationsResponse:
    activation_response: Optional[shared.ActivationResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
