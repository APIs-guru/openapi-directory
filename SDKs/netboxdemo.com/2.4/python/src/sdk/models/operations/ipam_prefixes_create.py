from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesCreateRequest:
    request: shared.WritablePrefixInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamPrefixesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    prefix: Optional[shared.Prefix] = field(default=None)
    
