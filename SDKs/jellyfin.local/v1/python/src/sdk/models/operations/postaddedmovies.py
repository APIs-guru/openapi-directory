from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAddedMoviesQueryParams:
    imdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imdbId', 'style': 'form', 'explode': True }})
    tmdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tmdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAddedMoviesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAddedMoviesRequest:
    query_params: PostAddedMoviesQueryParams = field(default=None)
    security: PostAddedMoviesSecurity = field(default=None)
    

@dataclass
class PostAddedMoviesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
