from dataclasses import dataclass, field



@dataclass
class DcimPowerPortsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsDeleteRequest:
    path_params: DcimPowerPortsDeletePathParams = field()
    

@dataclass
class DcimPowerPortsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
