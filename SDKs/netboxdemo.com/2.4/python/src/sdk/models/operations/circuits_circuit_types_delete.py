from dataclasses import dataclass, field



@dataclass
class CircuitsCircuitTypesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTypesDeleteRequest:
    path_params: CircuitsCircuitTypesDeletePathParams = field(default=None)
    

@dataclass
class CircuitsCircuitTypesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
