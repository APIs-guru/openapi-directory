from dataclasses import dataclass, field



@dataclass
class DcimConsoleServerPortTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesDeleteRequest:
    path_params: DcimConsoleServerPortTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimConsoleServerPortTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
