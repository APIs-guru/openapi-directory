from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostUserImagePathParams:
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUserImageQueryParams:
    index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUserImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUserImageRequest:
    path_params: PostUserImagePathParams = field()
    query_params: PostUserImageQueryParams = field()
    security: PostUserImageSecurity = field()
    

@dataclass
class PostUserImageResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
