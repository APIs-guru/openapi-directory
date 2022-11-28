from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTagsCreateRequest:
    request: shared.TagInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTagsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    tag: Optional[shared.Tag] = field(default=None)
    
