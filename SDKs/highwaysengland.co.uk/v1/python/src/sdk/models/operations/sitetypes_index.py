from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SiteTypesIndexPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class SiteTypesIndexRequest:
    path_params: SiteTypesIndexPathParams = field()
    

@dataclass
class SiteTypesIndexResponse:
    content_type: str = field()
    status_code: int = field()
    site_type_response: Optional[shared.SiteTypeResponse] = field(default=None)
    
