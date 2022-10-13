from dataclasses import dataclass, field



@dataclass
class CircuitsCircuitTerminationsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsDeleteRequest:
    path_params: CircuitsCircuitTerminationsDeletePathParams = field(default=None)
    

@dataclass
class CircuitsCircuitTerminationsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
