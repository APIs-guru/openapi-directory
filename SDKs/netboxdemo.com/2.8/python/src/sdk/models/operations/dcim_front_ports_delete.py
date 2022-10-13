from dataclasses import dataclass, field



@dataclass
class DcimFrontPortsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsDeleteRequest:
    path_params: DcimFrontPortsDeletePathParams = field(default=None)
    

@dataclass
class DcimFrontPortsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
