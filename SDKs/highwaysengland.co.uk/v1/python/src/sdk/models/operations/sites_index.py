from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SitesIndexPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class SitesIndexRequest:
    path_params: SitesIndexPathParams = field(default=None)
    

@dataclass
class SitesIndexResponse:
    content_type: str = field(default=None)
    site_response: Optional[shared.SiteResponse] = field(default=None)
    status_code: int = field(default=None)
    
