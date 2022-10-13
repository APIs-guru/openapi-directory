from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DeleteUserImageByIndexPathParams:
    image_type: shared.ImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserImageByIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteUserImageByIndexRequest:
    path_params: DeleteUserImageByIndexPathParams = field(default=None)
    security: DeleteUserImageByIndexSecurity = field(default=None)
    

@dataclass
class DeleteUserImageByIndexResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
