from dataclasses import dataclass, field



@dataclass
class DcimConsoleServerPortTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsoleServerPortTemplatesDeleteRequest:
    path_params: DcimConsoleServerPortTemplatesDeletePathParams = field()
    

@dataclass
class DcimConsoleServerPortTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
