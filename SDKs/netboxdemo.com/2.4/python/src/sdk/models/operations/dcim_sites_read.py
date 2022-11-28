from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesReadRequest:
    path_params: DcimSitesReadPathParams = field()
    

@dataclass
class DcimSitesReadResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
