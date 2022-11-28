from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DeleteItemImageByIndexPathParams:
    image_index: int = field(metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItemImageByIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteItemImageByIndexRequest:
    path_params: DeleteItemImageByIndexPathParams = field()
    security: DeleteItemImageByIndexSecurity = field()
    

@dataclass
class DeleteItemImageByIndexResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
