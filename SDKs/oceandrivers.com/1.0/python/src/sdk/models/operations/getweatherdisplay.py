from dataclasses import dataclass, field



@dataclass
class GetWeatherDisplayPathParams:
    station_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWeatherDisplayQueryParams:
    period: str = field(default=None, metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWeatherDisplayRequest:
    path_params: GetWeatherDisplayPathParams = field(default=None)
    query_params: GetWeatherDisplayQueryParams = field(default=None)
    

@dataclass
class GetWeatherDisplayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
