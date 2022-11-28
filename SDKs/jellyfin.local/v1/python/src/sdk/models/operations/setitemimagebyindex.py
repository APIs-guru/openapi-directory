from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SetItemImageByIndexPathParams:
    image_index: int = field(metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetItemImageByIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetItemImageByIndexRequest:
    path_params: SetItemImageByIndexPathParams = field()
    security: SetItemImageByIndexSecurity = field()
    

@dataclass
class SetItemImageByIndexResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
