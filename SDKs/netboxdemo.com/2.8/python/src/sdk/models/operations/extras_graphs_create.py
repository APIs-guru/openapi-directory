from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsCreateRequest:
    request: shared.Graph = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasGraphsCreateResponse:
    content_type: str = field(default=None)
    graph: Optional[shared.Graph] = field(default=None)
    status_code: int = field(default=None)
    
