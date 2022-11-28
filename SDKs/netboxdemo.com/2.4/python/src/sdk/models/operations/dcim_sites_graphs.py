from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimSitesGraphsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesGraphsRequest:
    path_params: DcimSitesGraphsPathParams = field()
    

@dataclass
class DcimSitesGraphsResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
