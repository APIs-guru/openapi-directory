from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DeleteUserImagePathParams:
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserImageQueryParams:
    index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteUserImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUserImageRequest:
    path_params: DeleteUserImagePathParams = field()
    query_params: DeleteUserImageQueryParams = field()
    security: DeleteUserImageSecurity = field()
    

@dataclass
class DeleteUserImageResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
