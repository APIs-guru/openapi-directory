from dataclasses import dataclass, field



@dataclass
class CompareStationPathParams:
    station_name: str = field(metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompareStationRequest:
    path_params: CompareStationPathParams = field()
    

@dataclass
class CompareStationResponse:
    content_type: str = field()
    status_code: int = field()
    
