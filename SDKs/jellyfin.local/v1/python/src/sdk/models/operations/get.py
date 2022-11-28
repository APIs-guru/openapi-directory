from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetQueryParams:
    search_term: str = field(metadata={'query_param': { 'field_name': 'searchTerm', 'style': 'form', 'explode': True }})
    exclude_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'excludeItemTypes', 'style': 'form', 'explode': True }})
    include_artists: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeArtists', 'style': 'form', 'explode': True }})
    include_genres: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeGenres', 'style': 'form', 'explode': True }})
    include_item_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemTypes', 'style': 'form', 'explode': True }})
    include_media: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeMedia', 'style': 'form', 'explode': True }})
    include_people: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includePeople', 'style': 'form', 'explode': True }})
    include_studios: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeStudios', 'style': 'form', 'explode': True }})
    is_kids: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isKids', 'style': 'form', 'explode': True }})
    is_movie: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMovie', 'style': 'form', 'explode': True }})
    is_news: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isNews', 'style': 'form', 'explode': True }})
    is_series: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isSeries', 'style': 'form', 'explode': True }})
    is_sports: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isSports', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    media_types: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mediaTypes', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field()
    security: GetSecurity = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    search_hint_result: Optional[shared.SearchHintResult] = field(default=None)
    
