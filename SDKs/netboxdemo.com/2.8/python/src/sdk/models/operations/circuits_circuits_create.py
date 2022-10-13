from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitsCreateRequest:
    request: shared.WritableCircuit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitsCreateResponse:
    circuit: Optional[shared.Circuit] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
