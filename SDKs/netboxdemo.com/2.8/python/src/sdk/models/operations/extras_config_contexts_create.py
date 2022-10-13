from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasConfigContextsCreateRequest:
    request: shared.WritableConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasConfigContextsCreateResponse:
    config_context: Optional[shared.ConfigContext] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
