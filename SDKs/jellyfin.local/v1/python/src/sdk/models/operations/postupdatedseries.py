from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostUpdatedSeriesQueryParams:
    tvdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tvdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUpdatedSeriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdatedSeriesRequest:
    query_params: PostUpdatedSeriesQueryParams = field(default=None)
    security: PostUpdatedSeriesSecurity = field(default=None)
    

@dataclass
class PostUpdatedSeriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
