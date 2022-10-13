from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostAddedSeriesQueryParams:
    tvdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tvdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAddedSeriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAddedSeriesRequest:
    query_params: PostAddedSeriesQueryParams = field(default=None)
    security: PostAddedSeriesSecurity = field(default=None)
    

@dataclass
class PostAddedSeriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
