from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesCreateRequest:
    request: shared.WritablePrefix = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamPrefixesCreateResponse:
    content_type: str = field(default=None)
    prefix: Optional[shared.Prefix] = field(default=None)
    status_code: int = field(default=None)
    
