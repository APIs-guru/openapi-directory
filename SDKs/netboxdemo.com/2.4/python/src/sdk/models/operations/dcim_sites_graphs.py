from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesGraphsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesGraphsRequest:
    path_params: DcimSitesGraphsPathParams = field(default=None)
    

@dataclass
class DcimSitesGraphsResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
