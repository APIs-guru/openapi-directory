from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class PostUserImagePathParams:
    image_type: shared.ImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUserImageQueryParams:
    index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUserImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUserImageRequest:
    path_params: PostUserImagePathParams = field(default=None)
    query_params: PostUserImageQueryParams = field(default=None)
    security: PostUserImageSecurity = field(default=None)
    

@dataclass
class PostUserImageResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
