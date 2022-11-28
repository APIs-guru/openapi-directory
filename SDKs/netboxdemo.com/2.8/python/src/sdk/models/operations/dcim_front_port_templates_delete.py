from dataclasses import dataclass, field



@dataclass
class DcimFrontPortTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortTemplatesDeleteRequest:
    path_params: DcimFrontPortTemplatesDeletePathParams = field()
    

@dataclass
class DcimFrontPortTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
