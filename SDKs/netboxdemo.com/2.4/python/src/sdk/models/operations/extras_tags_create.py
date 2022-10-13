from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTagsCreateRequest:
    request: shared.Tag = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTagsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
