from dataclasses import dataclass, field



@dataclass
class CircuitsChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsChoicesReadRequest:
    path_params: CircuitsChoicesReadPathParams = field(default=None)
    

@dataclass
class CircuitsChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
