from dataclasses import dataclass, field



@dataclass
class CircuitsCircuitsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitsDeleteRequest:
    path_params: CircuitsCircuitsDeletePathParams = field()
    

@dataclass
class CircuitsCircuitsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
