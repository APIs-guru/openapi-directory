from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetLiveTvProgramsQueryParams:
    channel_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'channelIds', 'style': 'form', 'explode': True }})
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_total_record_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableTotalRecordCount', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    genre_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genreIds', 'style': 'form', 'explode': True }})
    genres: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genres', 'style': 'form', 'explode': True }})
    has_aired: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasAired', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    is_airing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isAiring', 'style': 'form', 'explode': True }})
    is_kids: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isKids', 'style': 'form', 'explode': True }})
    is_movie: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMovie', 'style': 'form', 'explode': True }})
    is_news: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isNews', 'style': 'form', 'explode': True }})
    is_series: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isSeries', 'style': 'form', 'explode': True }})
    is_sports: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isSports', 'style': 'form', 'explode': True }})
    library_series_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'librarySeriesId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'maxEndDate', 'style': 'form', 'explode': True }})
    max_start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'maxStartDate', 'style': 'form', 'explode': True }})
    min_end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'minEndDate', 'style': 'form', 'explode': True }})
    min_start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'minStartDate', 'style': 'form', 'explode': True }})
    series_timer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seriesTimerId', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLiveTvProgramsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLiveTvProgramsRequest:
    query_params: GetLiveTvProgramsQueryParams = field()
    security: GetLiveTvProgramsSecurity = field()
    

@dataclass
class GetLiveTvProgramsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    
