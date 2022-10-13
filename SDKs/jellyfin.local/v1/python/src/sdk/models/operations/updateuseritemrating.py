from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateUserItemRatingPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserItemRatingQueryParams:
    likes: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'likes', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateUserItemRatingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserItemRatingRequest:
    path_params: UpdateUserItemRatingPathParams = field(default=None)
    query_params: UpdateUserItemRatingQueryParams = field(default=None)
    security: UpdateUserItemRatingSecurity = field(default=None)
    

@dataclass
class UpdateUserItemRatingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_item_data_dto: Optional[shared.UserItemDataDto] = field(default=None)
    
