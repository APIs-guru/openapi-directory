from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCoursesContentIDPermissionsPathParams:
    content_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCoursesContentIDPermissionsRequest:
    path_params: GetCoursesContentIDPermissionsPathParams = field(default=None)
    

@dataclass
class GetCoursesContentIDPermissionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user_permission: Optional[Any] = field(default=None)
    
