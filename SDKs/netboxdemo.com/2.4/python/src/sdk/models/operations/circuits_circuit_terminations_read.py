from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsReadRequest:
    path_params: CircuitsCircuitTerminationsReadPathParams = field(default=None)
    

@dataclass
class CircuitsCircuitTerminationsReadResponse:
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
