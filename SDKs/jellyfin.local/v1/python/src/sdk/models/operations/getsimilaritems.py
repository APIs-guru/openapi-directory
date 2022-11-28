from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSimilarItemsPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSimilarItemsQueryParams:
    exclude_artist_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeArtistIds', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSimilarItemsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSimilarItemsRequest:
    path_params: GetSimilarItemsPathParams = field()
    query_params: GetSimilarItemsQueryParams = field()
    security: GetSimilarItemsSecurity = field()
    

@dataclass
class GetSimilarItemsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
