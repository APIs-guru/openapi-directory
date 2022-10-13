from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MarkUnplayedItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkUnplayedItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MarkUnplayedItemRequest:
    path_params: MarkUnplayedItemPathParams = field(default=None)
    security: MarkUnplayedItemSecurity = field(default=None)
    

@dataclass
class MarkUnplayedItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_item_data_dto: Optional[shared.UserItemDataDto] = field(default=None)
    
