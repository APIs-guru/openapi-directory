from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SiteTypesGetSitesForPublicFacingAPIPathParams:
    site_type_id: int = field(default=None, metadata={'path_param': { 'field_name': 'siteType_Id', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class SiteTypesGetSitesForPublicFacingAPIRequest:
    path_params: SiteTypesGetSitesForPublicFacingAPIPathParams = field(default=None)
    

@dataclass
class SiteTypesGetSitesForPublicFacingAPIResponse:
    content_type: str = field(default=None)
    site_type_layer: Optional[shared.SiteTypeLayer] = field(default=None)
    status_code: int = field(default=None)
    
