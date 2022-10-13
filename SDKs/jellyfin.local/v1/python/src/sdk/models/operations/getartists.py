from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetArtistsQueryParams:
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_total_record_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableTotalRecordCount', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    exclude_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeItemTypes', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[List[shared.ItemFilterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    genre_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genreIds', 'style': 'form', 'explode': True }})
    genres: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genres', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    include_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemTypes', 'style': 'form', 'explode': True }})
    is_favorite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isFavorite', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    media_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mediaTypes', 'style': 'form', 'explode': True }})
    min_community_rating: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minCommunityRating', 'style': 'form', 'explode': True }})
    name_less_than: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameLessThan', 'style': 'form', 'explode': True }})
    name_starts_with: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameStartsWith', 'style': 'form', 'explode': True }})
    name_starts_with_or_greater: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameStartsWithOrGreater', 'style': 'form', 'explode': True }})
    official_ratings: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'officialRatings', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    person: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'person', 'style': 'form', 'explode': True }})
    person_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'personIds', 'style': 'form', 'explode': True }})
    person_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'personTypes', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    studio_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'studioIds', 'style': 'form', 'explode': True }})
    studios: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'studios', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    years: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'years', 'style': 'form', 'explode': True }})
    

@dataclass
class GetArtistsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetArtistsRequest:
    query_params: GetArtistsQueryParams = field(default=None)
    security: GetArtistsSecurity = field(default=None)
    

@dataclass
class GetArtistsResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
