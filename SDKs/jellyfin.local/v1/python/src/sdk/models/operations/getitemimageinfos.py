from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetItemImageInfosPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemImageInfosSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetItemImageInfosRequest:
    path_params: GetItemImageInfosPathParams = field(default=None)
    security: GetItemImageInfosSecurity = field(default=None)
    

@dataclass
class GetItemImageInfosResponse:
    content_type: str = field(default=None)
    image_infos: Optional[List[shared.ImageInfo]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
