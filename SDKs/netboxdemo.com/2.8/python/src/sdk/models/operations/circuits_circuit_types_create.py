from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTypesCreateRequest:
    request: shared.CircuitType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTypesCreateResponse:
    circuit_type: Optional[shared.CircuitType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
