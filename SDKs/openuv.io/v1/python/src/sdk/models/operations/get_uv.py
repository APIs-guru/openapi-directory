from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetUvQueryParams:
    alt: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dt: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dt', 'style': 'form', 'explode': True }})
    lat: float = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUvHeaders:
    x_access_token: str = field(default=None, metadata={'header': { 'field_name': 'x-access-token' }})
    

@dataclass
class GetUvRequest:
    query_params: GetUvQueryParams = field(default=None)
    headers: GetUvHeaders = field(default=None)
    

@dataclass
class GetUvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    uv_index_result: Optional[shared.UvIndexResult] = field(default=None)
    
