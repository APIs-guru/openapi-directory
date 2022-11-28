from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllImageUrlsPathParams:
    organization_uuid: str = field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllImageUrlsSecurity:
    zettle_api_key: Optional[shared.SchemeZettleAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared.SchemeZettleOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllImageUrlsRequest:
    path_params: GetAllImageUrlsPathParams = field()
    security: GetAllImageUrlsSecurity = field()
    

@dataclass
class GetAllImageUrlsResponse:
    content_type: str = field()
    status_code: int = field()
    library_images_response: Optional[shared.LibraryImagesResponse] = field(default=None)
    
