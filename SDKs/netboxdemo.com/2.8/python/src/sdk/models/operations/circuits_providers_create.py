from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsProvidersCreateRequest:
    request: shared.ProviderInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsProvidersCreateResponse:
    content_type: str = field()
    status_code: int = field()
    provider: Optional[shared.Provider] = field(default=None)
    
