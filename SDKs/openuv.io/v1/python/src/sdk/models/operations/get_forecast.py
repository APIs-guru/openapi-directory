from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetForecastQueryParams:
    lat: float = field(metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: float = field(metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    alt: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    dt: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dt', 'style': 'form', 'explode': True }})
    ozone: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'ozone', 'style': 'form', 'explode': True }})
    

@dataclass
class GetForecastHeaders:
    x_access_token: str = field(metadata={'header': { 'field_name': 'x-access-token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastRequest:
    headers: GetForecastHeaders = field()
    query_params: GetForecastQueryParams = field()
    

@dataclass
class GetForecastResponse:
    content_type: str = field()
    status_code: int = field()
    forecast_results: Optional[List[List[shared.Forecast]]] = field(default=None)
    
