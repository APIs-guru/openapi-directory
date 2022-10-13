from dataclasses import dataclass, field



@dataclass
class CompareStationPathParams:
    station_name: str = field(default=None, metadata={'path_param': { 'field_name': 'stationName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompareStationRequest:
    path_params: CompareStationPathParams = field(default=None)
    

@dataclass
class CompareStationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
