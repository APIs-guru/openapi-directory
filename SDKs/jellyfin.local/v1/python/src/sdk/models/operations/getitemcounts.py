from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItemCountsQueryParams:
    is_favorite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isFavorite', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItemCountsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetItemCountsRequest:
    query_params: GetItemCountsQueryParams = field()
    security: GetItemCountsSecurity = field()
    

@dataclass
class GetItemCountsResponse:
    content_type: str = field()
    status_code: int = field()
    item_counts: Optional[shared.ItemCounts] = field(default=None)
    
