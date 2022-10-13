from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DeleteItemImagePathParams:
    image_type: shared.ImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemImageQueryParams:
    image_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteItemImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteItemImageRequest:
    path_params: DeleteItemImagePathParams = field(default=None)
    query_params: DeleteItemImageQueryParams = field(default=None)
    security: DeleteItemImageSecurity = field(default=None)
    

@dataclass
class DeleteItemImageResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
