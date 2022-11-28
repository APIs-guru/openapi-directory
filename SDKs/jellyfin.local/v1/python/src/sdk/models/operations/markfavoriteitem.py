from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MarkFavoriteItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkFavoriteItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MarkFavoriteItemRequest:
    path_params: MarkFavoriteItemPathParams = field()
    security: MarkFavoriteItemSecurity = field()
    

@dataclass
class MarkFavoriteItemResponse:
    content_type: str = field()
    status_code: int = field()
    user_item_data_dto: Optional[shared.UserItemDataDto] = field(default=None)
    
