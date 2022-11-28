from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostUserImageByIndexPathParams:
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    index: int = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUserImageByIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUserImageByIndexRequest:
    path_params: PostUserImageByIndexPathParams = field()
    security: PostUserImageByIndexSecurity = field()
    

@dataclass
class PostUserImageByIndexResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
