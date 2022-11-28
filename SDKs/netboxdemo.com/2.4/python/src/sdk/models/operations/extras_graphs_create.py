from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsCreateRequest:
    request: shared.WritableGraphInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasGraphsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    graph: Optional[shared.Graph] = field(default=None)
    
