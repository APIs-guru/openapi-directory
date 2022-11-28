from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddShortlinkRequest:
    request: shared.ShortlinkRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddShortlinkResponse:
    content_type: str = field()
    status_code: int = field()
    erreur: Optional[shared.Erreur] = field(default=None)
    shortlink_response: Optional[shared.ShortlinkResponse] = field(default=None)
    
