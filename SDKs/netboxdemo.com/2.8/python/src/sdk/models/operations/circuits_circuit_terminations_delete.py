from dataclasses import dataclass, field



@dataclass
class CircuitsCircuitTerminationsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsDeleteRequest:
    path_params: CircuitsCircuitTerminationsDeletePathParams = field()
    

@dataclass
class CircuitsCircuitTerminationsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
