from dataclasses import dataclass, field



@dataclass
class DcimChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimChoicesReadRequest:
    path_params: DcimChoicesReadPathParams = field(default=None)
    

@dataclass
class DcimChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
