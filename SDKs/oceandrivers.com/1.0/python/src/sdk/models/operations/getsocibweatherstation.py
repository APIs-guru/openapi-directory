from dataclasses import dataclass, field



@dataclass
class GetSocibWeatherStationPathParams:
    period: str = field(default=None, metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    station_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSocibWeatherStationRequest:
    path_params: GetSocibWeatherStationPathParams = field(default=None)
    

@dataclass
class GetSocibWeatherStationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
