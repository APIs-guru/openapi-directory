from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRecommendedProgramsQueryParams:
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_total_record_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableTotalRecordCount', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    genre_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genreIds', 'style': 'form', 'explode': True }})
    has_aired: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasAired', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    is_airing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isAiring', 'style': 'form', 'explode': True }})
    is_kids: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isKids', 'style': 'form', 'explode': True }})
    is_movie: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMovie', 'style': 'form', 'explode': True }})
    is_news: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isNews', 'style': 'form', 'explode': True }})
    is_series: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isSeries', 'style': 'form', 'explode': True }})
    is_sports: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isSports', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecommendedProgramsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRecommendedProgramsRequest:
    query_params: GetRecommendedProgramsQueryParams = field()
    security: GetRecommendedProgramsSecurity = field()
    

@dataclass
class GetRecommendedProgramsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
