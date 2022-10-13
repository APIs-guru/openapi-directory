from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SiteTypesIndexPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class SiteTypesIndexRequest:
    path_params: SiteTypesIndexPathParams = field(default=None)
    

@dataclass
class SiteTypesIndexResponse:
    content_type: str = field(default=None)
    site_type_response: Optional[shared.SiteTypeResponse] = field(default=None)
    status_code: int = field(default=None)
    
