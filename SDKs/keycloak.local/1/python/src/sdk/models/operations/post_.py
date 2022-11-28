from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRequest:
    request: shared.RealmRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostResponse:
    content_type: str = field()
    status_code: int = field()
    
