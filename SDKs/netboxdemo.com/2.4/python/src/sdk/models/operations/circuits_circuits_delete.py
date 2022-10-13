from dataclasses import dataclass, field



@dataclass
class CircuitsCircuitsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitsDeleteRequest:
    path_params: CircuitsCircuitsDeletePathParams = field(default=None)
    

@dataclass
class CircuitsCircuitsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
