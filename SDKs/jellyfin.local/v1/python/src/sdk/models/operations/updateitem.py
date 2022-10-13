from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemRequests:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    base_item_dto1: Optional[shared.BaseItemDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    base_item_dto2: Optional[shared.BaseItemDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateItemRequest:
    path_params: UpdateItemPathParams = field(default=None)
    request: UpdateItemRequests = field(default=None)
    security: UpdateItemSecurity = field(default=None)
    

@dataclass
class UpdateItemResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
