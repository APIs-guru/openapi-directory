from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTypesCreateRequest:
    request: shared.CircuitTypeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTypesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    circuit_type: Optional[shared.CircuitType] = field(default=None)
    
