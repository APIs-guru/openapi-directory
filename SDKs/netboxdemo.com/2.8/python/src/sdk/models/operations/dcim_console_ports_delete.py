from dataclasses import dataclass, field



@dataclass
class DcimConsolePortsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsDeleteRequest:
    path_params: DcimConsolePortsDeletePathParams = field()
    

@dataclass
class DcimConsolePortsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
