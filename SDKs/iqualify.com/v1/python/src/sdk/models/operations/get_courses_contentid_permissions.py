from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCoursesContentIDPermissionsPathParams:
    content_id: str = field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCoursesContentIDPermissionsRequest:
    path_params: GetCoursesContentIDPermissionsPathParams = field()
    

@dataclass
class GetCoursesContentIDPermissionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    user_permission: Optional[Any] = field(default=None)
    
