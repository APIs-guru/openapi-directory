from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddItemListRequest:
    request: shared.ItemList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddItemListResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
