from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesCreateRequest:
    request: shared.WritableSiteInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimSitesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
