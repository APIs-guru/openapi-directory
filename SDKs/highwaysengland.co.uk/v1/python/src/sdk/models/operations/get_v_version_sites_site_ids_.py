from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVVersionSitesSiteIdsPathParams:
    site_ids: str = field(metadata={'path_param': { 'field_name': 'site_Ids', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVVersionSitesSiteIdsRequest:
    path_params: GetVVersionSitesSiteIdsPathParams = field()
    

@dataclass
class GetVVersionSitesSiteIdsResponse:
    content_type: str = field()
    status_code: int = field()
    site_response: Optional[shared.SiteResponse] = field(default=None)
    
