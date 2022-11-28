from dataclasses import dataclass, field



@dataclass
class CircuitsCircuitTypesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTypesDeleteRequest:
    path_params: CircuitsCircuitTypesDeletePathParams = field()
    

@dataclass
class CircuitsCircuitTypesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
