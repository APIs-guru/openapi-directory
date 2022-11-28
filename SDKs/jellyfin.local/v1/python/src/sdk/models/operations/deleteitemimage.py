from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DeleteItemImagePathParams:
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemImageQueryParams:
    image_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteItemImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteItemImageRequest:
    path_params: DeleteItemImagePathParams = field()
    query_params: DeleteItemImageQueryParams = field()
    security: DeleteItemImageSecurity = field()
    

@dataclass
class DeleteItemImageResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
