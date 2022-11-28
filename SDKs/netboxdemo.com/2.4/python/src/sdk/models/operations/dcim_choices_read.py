from dataclasses import dataclass, field



@dataclass
class DcimChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimChoicesReadRequest:
    path_params: DcimChoicesReadPathParams = field()
    

@dataclass
class DcimChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
