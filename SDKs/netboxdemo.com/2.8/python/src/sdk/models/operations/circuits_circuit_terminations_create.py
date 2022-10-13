from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsCreateRequest:
    request: shared.WritableCircuitTermination = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTerminationsCreateResponse:
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
