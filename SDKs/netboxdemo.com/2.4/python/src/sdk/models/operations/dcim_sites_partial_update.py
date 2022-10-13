from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesPartialUpdateRequest:
    path_params: DcimSitesPartialUpdatePathParams = field(default=None)
    request: shared.WritableSite = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimSitesPartialUpdateResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
