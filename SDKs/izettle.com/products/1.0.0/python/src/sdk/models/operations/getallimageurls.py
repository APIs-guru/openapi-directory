from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllImageUrlsPathParams:
    organization_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllImageUrlsSecurityOption1:
    zettle_api_key: shared.SchemeZettleAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAllImageUrlsSecurityOption2:
    zettle_oauth: shared.SchemeZettleOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllImageUrlsSecurity:
    option1: Optional[GetAllImageUrlsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllImageUrlsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllImageUrlsRequest:
    path_params: GetAllImageUrlsPathParams = field(default=None)
    security: GetAllImageUrlsSecurity = field(default=None)
    

@dataclass
class GetAllImageUrlsResponse:
    content_type: str = field(default=None)
    library_images_response: Optional[shared.LibraryImagesResponse] = field(default=None)
    status_code: int = field(default=None)
    
