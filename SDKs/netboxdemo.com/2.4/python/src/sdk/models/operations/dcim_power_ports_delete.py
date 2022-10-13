from dataclasses import dataclass, field



@dataclass
class DcimPowerPortsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortsDeleteRequest:
    path_params: DcimPowerPortsDeletePathParams = field(default=None)
    

@dataclass
class DcimPowerPortsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
