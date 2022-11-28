from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostUpdatedMoviesQueryParams:
    imdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imdbId', 'style': 'form', 'explode': True }})
    tmdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tmdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUpdatedMoviesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdatedMoviesRequest:
    query_params: PostUpdatedMoviesQueryParams = field()
    security: PostUpdatedMoviesSecurity = field()
    

@dataclass
class PostUpdatedMoviesResponse:
    content_type: str = field()
    status_code: int = field()
    
