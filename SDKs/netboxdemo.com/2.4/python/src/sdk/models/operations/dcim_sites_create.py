from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesCreateRequest:
    request: shared.WritableSite = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimSitesCreateResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
