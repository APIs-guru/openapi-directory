from dataclasses import dataclass, field



@dataclass
class ExtrasChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasChoicesReadRequest:
    path_params: ExtrasChoicesReadPathParams = field(default=None)
    

@dataclass
class ExtrasChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
