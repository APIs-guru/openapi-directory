from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddItemRequest:
    request: shared.ItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddItemResponse:
    content_type: str = field()
    status_code: int = field()
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    
