from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetChannelsQueryParams:
    is_favorite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isFavorite', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    supports_latest_items: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsLatestItems', 'style': 'form', 'explode': True }})
    supports_media_deletion: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsMediaDeletion', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChannelsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetChannelsRequest:
    query_params: GetChannelsQueryParams = field()
    security: GetChannelsSecurity = field()
    

@dataclass
class GetChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
