from dataclasses import dataclass, field



@dataclass
class GetAemetStationPathParams:
    period: str = field(default=None, metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    station_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAemetStationRequest:
    path_params: GetAemetStationPathParams = field(default=None)
    

@dataclass
class GetAemetStationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
