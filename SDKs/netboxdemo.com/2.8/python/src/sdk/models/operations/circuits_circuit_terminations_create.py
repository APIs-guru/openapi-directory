from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsCreateRequest:
    request: shared.WritableCircuitTerminationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTerminationsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    
