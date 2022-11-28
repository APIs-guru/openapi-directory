from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitsCreateRequest:
    request: shared.WritableCircuitInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    circuit: Optional[shared.Circuit] = field(default=None)
    
