from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetItemRequest:
    path_params: GetItemPathParams = field()
    security: GetItemSecurity = field()
    

@dataclass
class GetItemResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    
