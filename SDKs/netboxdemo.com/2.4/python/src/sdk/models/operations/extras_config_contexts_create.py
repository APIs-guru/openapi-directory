from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsCreateRequest:
    request: shared.WritableConfigContextInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasConfigContextsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    config_context: Optional[shared.ConfigContext] = field(default=None)
    
