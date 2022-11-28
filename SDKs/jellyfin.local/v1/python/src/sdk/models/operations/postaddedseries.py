from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAddedSeriesQueryParams:
    tvdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tvdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAddedSeriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAddedSeriesRequest:
    query_params: PostAddedSeriesQueryParams = field()
    security: PostAddedSeriesSecurity = field()
    

@dataclass
class PostAddedSeriesResponse:
    content_type: str = field()
    status_code: int = field()
    
