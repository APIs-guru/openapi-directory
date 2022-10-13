from dataclasses import dataclass, field



@dataclass
class DcimFrontPortTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesDeleteRequest:
    path_params: DcimFrontPortTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimFrontPortTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
