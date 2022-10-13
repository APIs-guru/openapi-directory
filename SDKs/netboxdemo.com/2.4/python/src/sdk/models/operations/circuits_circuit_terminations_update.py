from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsUpdateRequest:
    path_params: CircuitsCircuitTerminationsUpdatePathParams = field(default=None)
    request: shared.WritableCircuitTermination = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTerminationsUpdateResponse:
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
