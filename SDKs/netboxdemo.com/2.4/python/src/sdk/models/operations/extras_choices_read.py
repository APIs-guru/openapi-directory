from dataclasses import dataclass, field



@dataclass
class ExtrasChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasChoicesReadRequest:
    path_params: ExtrasChoicesReadPathParams = field()
    

@dataclass
class ExtrasChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
