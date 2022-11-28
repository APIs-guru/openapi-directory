from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsReadRequest:
    path_params: CircuitsCircuitTerminationsReadPathParams = field()
    

@dataclass
class CircuitsCircuitTerminationsReadResponse:
    content_type: str = field()
    status_code: int = field()
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    
