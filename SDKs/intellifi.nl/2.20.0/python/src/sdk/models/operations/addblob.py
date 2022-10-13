from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddBlobRequest:
    request: shared.Blob = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddBlobResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    
