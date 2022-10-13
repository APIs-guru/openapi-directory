from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class UpdateItemImageIndexPathParams:
    image_index: int = field(default=None, metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemImageIndexQueryParams:
    new_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'newIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateItemImageIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateItemImageIndexRequest:
    path_params: UpdateItemImageIndexPathParams = field(default=None)
    query_params: UpdateItemImageIndexQueryParams = field(default=None)
    security: UpdateItemImageIndexSecurity = field(default=None)
    

@dataclass
class UpdateItemImageIndexResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
