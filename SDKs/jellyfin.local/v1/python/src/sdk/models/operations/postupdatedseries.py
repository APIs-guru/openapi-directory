from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostUpdatedSeriesQueryParams:
    tvdb_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tvdbId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUpdatedSeriesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUpdatedSeriesRequest:
    query_params: PostUpdatedSeriesQueryParams = field()
    security: PostUpdatedSeriesSecurity = field()
    

@dataclass
class PostUpdatedSeriesResponse:
    content_type: str = field()
    status_code: int = field()
    
