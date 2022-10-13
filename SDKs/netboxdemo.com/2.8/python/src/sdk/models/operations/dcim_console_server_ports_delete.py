from dataclasses import dataclass, field



@dataclass
class DcimConsoleServerPortsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortsDeleteRequest:
    path_params: DcimConsoleServerPortsDeletePathParams = field(default=None)
    

@dataclass
class DcimConsoleServerPortsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
