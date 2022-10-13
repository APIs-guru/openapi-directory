from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetSimilarShowsPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSimilarShowsQueryParams:
    exclude_artist_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeArtistIds', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSimilarShowsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSimilarShowsRequest:
    path_params: GetSimilarShowsPathParams = field(default=None)
    query_params: GetSimilarShowsQueryParams = field(default=None)
    security: GetSimilarShowsSecurity = field(default=None)
    

@dataclass
class GetSimilarShowsResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
