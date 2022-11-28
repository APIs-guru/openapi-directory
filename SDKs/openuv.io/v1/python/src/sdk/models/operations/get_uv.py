from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetUvQueryParams:
    lat: float = field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    alt: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dt: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dt', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUvHeaders:
    x_access_token: str = field(metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUvRequest:
    headers: GetUvHeaders = field()
    query_params: GetUvQueryParams = field()
    

@dataclass
class GetUvResponse:
    content_type: str = field()
    status_code: int = field()
    uv_index_result: Optional[shared.UvIndexResult] = field(default=None)
    
