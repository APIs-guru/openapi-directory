from dataclasses import dataclass, field



@dataclass
class GetAemetStationPathParams:
    period: str = field(metadata={'path_param': { 'field_name': 'period', 'style': 'simple', 'explode': False }})
    station_name: str = field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAemetStationRequest:
    path_params: GetAemetStationPathParams = field()
    

@dataclass
class GetAemetStationResponse:
    content_type: str = field()
    status_code: int = field()
    
