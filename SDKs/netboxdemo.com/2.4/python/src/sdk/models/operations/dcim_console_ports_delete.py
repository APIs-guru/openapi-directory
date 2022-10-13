from dataclasses import dataclass, field



@dataclass
class DcimConsolePortsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortsDeleteRequest:
    path_params: DcimConsolePortsDeletePathParams = field(default=None)
    

@dataclass
class DcimConsolePortsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
