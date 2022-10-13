from dataclasses import dataclass, field



@dataclass
class DcimConsolePortTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesDeleteRequest:
    path_params: DcimConsolePortTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimConsolePortTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
