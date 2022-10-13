from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRequest:
    request: shared.RealmRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
