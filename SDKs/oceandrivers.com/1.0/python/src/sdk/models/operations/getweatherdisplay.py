from dataclasses import dataclass, field



@dataclass
class GetWeatherDisplayPathParams:
    station_name: str = field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWeatherDisplayQueryParams:
    period: str = field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWeatherDisplayRequest:
    path_params: GetWeatherDisplayPathParams = field()
    query_params: GetWeatherDisplayQueryParams = field()
    

@dataclass
class GetWeatherDisplayResponse:
    content_type: str = field()
    status_code: int = field()
    
