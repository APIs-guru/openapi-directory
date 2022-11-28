from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetForecastTimeSeriesWrfPathParams:
    latitude: float = field(metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: float = field(metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastTimeSeriesWrfQueryParams:
    weather: str = field(metadata={'query_param': { 'field_name': 'weather', 'style': 'form', 'explode': True }})
    days: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'days', 'style': 'form', 'explode': True }})
    endtime: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endtime', 'style': 'form', 'explode': True }})
    entryid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entryid', 'style': 'form', 'explode': True }})
    hours: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'hours', 'style': 'form', 'explode': True }})
    inittime: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inittime', 'style': 'form', 'explode': True }})
    wave: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'wave', 'style': 'form', 'explode': True }})
    

@dataclass
class GetForecastTimeSeriesWrfRequest:
    path_params: GetForecastTimeSeriesWrfPathParams = field()
    query_params: GetForecastTimeSeriesWrfQueryParams = field()
    

@dataclass
class GetForecastTimeSeriesWrfResponse:
    content_type: str = field()
    status_code: int = field()
    
