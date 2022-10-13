from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class SetItemImageByIndexPathParams:
    image_index: int = field(default=None, metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetItemImageByIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetItemImageByIndexRequest:
    path_params: SetItemImageByIndexPathParams = field(default=None)
    security: SetItemImageByIndexSecurity = field(default=None)
    

@dataclass
class SetItemImageByIndexResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
