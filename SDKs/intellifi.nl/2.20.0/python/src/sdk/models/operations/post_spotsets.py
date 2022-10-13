from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSpotsetsRequest:
    request: shared.SpotSetCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSpotsetsResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
