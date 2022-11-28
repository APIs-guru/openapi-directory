from dataclasses import dataclass, field



@dataclass
class DcimConsolePortTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimConsolePortTemplatesDeleteRequest:
    path_params: DcimConsolePortTemplatesDeletePathParams = field()
    

@dataclass
class DcimConsolePortTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
