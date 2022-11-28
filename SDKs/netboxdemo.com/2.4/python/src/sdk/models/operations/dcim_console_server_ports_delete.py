from dataclasses import dataclass, field



@dataclass
class DcimConsoleServerPortsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortsDeleteRequest:
    path_params: DcimConsoleServerPortsDeletePathParams = field()
    

@dataclass
class DcimConsoleServerPortsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
