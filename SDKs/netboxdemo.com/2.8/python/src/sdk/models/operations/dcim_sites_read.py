from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesReadRequest:
    path_params: DcimSitesReadPathParams = field(default=None)
    

@dataclass
class DcimSitesReadResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
