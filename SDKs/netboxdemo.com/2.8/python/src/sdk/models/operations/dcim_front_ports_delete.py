from dataclasses import dataclass, field



@dataclass
class DcimFrontPortsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsDeleteRequest:
    path_params: DcimFrontPortsDeletePathParams = field()
    

@dataclass
class DcimFrontPortsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
