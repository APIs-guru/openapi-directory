from dataclasses import dataclass, field



@dataclass
class CircuitsChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsChoicesReadRequest:
    path_params: CircuitsChoicesReadPathParams = field()
    

@dataclass
class CircuitsChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
