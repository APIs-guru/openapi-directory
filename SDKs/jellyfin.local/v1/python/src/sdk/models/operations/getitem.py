from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetItemRequest:
    path_params: GetItemPathParams = field(default=None)
    security: GetItemSecurity = field(default=None)
    

@dataclass
class GetItemResponse:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
