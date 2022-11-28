from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEpisodesPathParams:
    series_id: str = field(metadata={'path_param': { 'field_name': 'seriesId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodesQueryParams:
    adjacent_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'adjacentTo', 'style': 'form', 'explode': True }})
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    is_missing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMissing', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    season: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'season', 'style': 'form', 'explode': True }})
    season_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonId', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    start_item_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startItemId', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEpisodesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEpisodesRequest:
    path_params: GetEpisodesPathParams = field()
    query_params: GetEpisodesQueryParams = field()
    security: GetEpisodesSecurity = field()
    

@dataclass
class GetEpisodesResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
