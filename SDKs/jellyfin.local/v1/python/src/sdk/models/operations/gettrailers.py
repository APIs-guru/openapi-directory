from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetTrailersQueryParams:
    adjacent_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'adjacentTo', 'style': 'form', 'explode': True }})
    album_artist_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'albumArtistIds', 'style': 'form', 'explode': True }})
    album_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'albumIds', 'style': 'form', 'explode': True }})
    albums: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'albums', 'style': 'form', 'explode': True }})
    artist_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'artistIds', 'style': 'form', 'explode': True }})
    artists: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'artists', 'style': 'form', 'explode': True }})
    collapse_box_set_items: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'collapseBoxSetItems', 'style': 'form', 'explode': True }})
    contributing_artist_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'contributingArtistIds', 'style': 'form', 'explode': True }})
    enable_image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'enableImageTypes', 'style': 'form', 'explode': True }})
    enable_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableImages', 'style': 'form', 'explode': True }})
    enable_total_record_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableTotalRecordCount', 'style': 'form', 'explode': True }})
    enable_user_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableUserData', 'style': 'form', 'explode': True }})
    exclude_artist_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeArtistIds', 'style': 'form', 'explode': True }})
    exclude_item_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeItemIds', 'style': 'form', 'explode': True }})
    exclude_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeItemTypes', 'style': 'form', 'explode': True }})
    exclude_location_types: Optional[List[shared.LocationTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeLocationTypes', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filters: Optional[List[shared.ItemFilterEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    genre_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genreIds', 'style': 'form', 'explode': True }})
    genres: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'genres', 'style': 'form', 'explode': True }})
    has_imdb_id: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasImdbId', 'style': 'form', 'explode': True }})
    has_official_rating: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasOfficialRating', 'style': 'form', 'explode': True }})
    has_overview: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasOverview', 'style': 'form', 'explode': True }})
    has_parental_rating: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasParentalRating', 'style': 'form', 'explode': True }})
    has_special_feature: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasSpecialFeature', 'style': 'form', 'explode': True }})
    has_subtitles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasSubtitles', 'style': 'form', 'explode': True }})
    has_theme_song: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasThemeSong', 'style': 'form', 'explode': True }})
    has_theme_video: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasThemeVideo', 'style': 'form', 'explode': True }})
    has_tmdb_id: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasTmdbId', 'style': 'form', 'explode': True }})
    has_trailer: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasTrailer', 'style': 'form', 'explode': True }})
    has_tvdb_id: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hasTvdbId', 'style': 'form', 'explode': True }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    image_type_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypeLimit', 'style': 'form', 'explode': True }})
    image_types: Optional[List[shared.ImageTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'imageTypes', 'style': 'form', 'explode': True }})
    is3_d: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is3D', 'style': 'form', 'explode': True }})
    is4_k: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is4K', 'style': 'form', 'explode': True }})
    is_favorite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isFavorite', 'style': 'form', 'explode': True }})
    is_hd: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isHd', 'style': 'form', 'explode': True }})
    is_locked: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isLocked', 'style': 'form', 'explode': True }})
    is_missing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMissing', 'style': 'form', 'explode': True }})
    is_place_holder: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPlaceHolder', 'style': 'form', 'explode': True }})
    is_played: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPlayed', 'style': 'form', 'explode': True }})
    is_unaired: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isUnaired', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_types: Optional[List[shared.LocationTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'locationTypes', 'style': 'form', 'explode': True }})
    max_height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxHeight', 'style': 'form', 'explode': True }})
    max_official_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxOfficialRating', 'style': 'form', 'explode': True }})
    max_premiere_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'maxPremiereDate', 'style': 'form', 'explode': True }})
    max_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxWidth', 'style': 'form', 'explode': True }})
    media_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mediaTypes', 'style': 'form', 'explode': True }})
    min_community_rating: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minCommunityRating', 'style': 'form', 'explode': True }})
    min_critic_rating: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minCriticRating', 'style': 'form', 'explode': True }})
    min_date_last_saved: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'minDateLastSaved', 'style': 'form', 'explode': True }})
    min_date_last_saved_for_user: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'minDateLastSavedForUser', 'style': 'form', 'explode': True }})
    min_height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minHeight', 'style': 'form', 'explode': True }})
    min_official_rating: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'minOfficialRating', 'style': 'form', 'explode': True }})
    min_premiere_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'minPremiereDate', 'style': 'form', 'explode': True }})
    min_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minWidth', 'style': 'form', 'explode': True }})
    name_less_than: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameLessThan', 'style': 'form', 'explode': True }})
    name_starts_with: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameStartsWith', 'style': 'form', 'explode': True }})
    name_starts_with_or_greater: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameStartsWithOrGreater', 'style': 'form', 'explode': True }})
    official_ratings: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'officialRatings', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    parent_index_number: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'parentIndexNumber', 'style': 'form', 'explode': True }})
    person: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'person', 'style': 'form', 'explode': True }})
    person_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'personIds', 'style': 'form', 'explode': True }})
    person_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'personTypes', 'style': 'form', 'explode': True }})
    recursive: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'recursive', 'style': 'form', 'explode': True }})
    search_term: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    series_status: Optional[List[shared.SeriesStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'seriesStatus', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    studio_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'studioIds', 'style': 'form', 'explode': True }})
    studios: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'studios', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    video_types: Optional[List[shared.VideoTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'videoTypes', 'style': 'form', 'explode': True }})
    years: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'years', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrailersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTrailersRequest:
    query_params: GetTrailersQueryParams = field(default=None)
    security: GetTrailersSecurity = field(default=None)
    

@dataclass
class GetTrailersResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
