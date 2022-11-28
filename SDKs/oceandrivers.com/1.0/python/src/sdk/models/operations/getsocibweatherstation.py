from dataclasses import dataclass, field



@dataclass
class GetSocibWeatherStationPathParams:
    period: str = field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    station_name: str = field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSocibWeatherStationRequest:
    path_params: GetSocibWeatherStationPathParams = field()
    

@dataclass
class GetSocibWeatherStationResponse:
    content_type: str = field()
    status_code: int = field()
    
