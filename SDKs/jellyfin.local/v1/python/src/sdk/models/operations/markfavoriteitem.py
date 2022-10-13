from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MarkFavoriteItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkFavoriteItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MarkFavoriteItemRequest:
    path_params: MarkFavoriteItemPathParams = field(default=None)
    security: MarkFavoriteItemSecurity = field(default=None)
    

@dataclass
class MarkFavoriteItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_item_data_dto: Optional[shared.UserItemDataDto] = field(default=None)
    
