from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAddedMoviesQueryParams:
    imdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imdbId', 'style': 'form', 'explode': True }})
    tmdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tmdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAddedMoviesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAddedMoviesRequest:
    query_params: PostAddedMoviesQueryParams = field()
    security: PostAddedMoviesSecurity = field()
    

@dataclass
class PostAddedMoviesResponse:
    content_type: str = field()
    status_code: int = field()
    
