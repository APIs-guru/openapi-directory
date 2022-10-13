from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsProvidersCreateRequest:
    request: shared.Provider = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsProvidersCreateResponse:
    content_type: str = field(default=None)
    provider: Optional[shared.Provider] = field(default=None)
    status_code: int = field(default=None)
    
