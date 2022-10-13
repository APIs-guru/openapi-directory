from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DownloadRemoteImagePathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadRemoteImageQueryParams:
    image_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imageUrl', 'style': 'form', 'explode': True }})
    type: shared.ImageTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadRemoteImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DownloadRemoteImageRequest:
    path_params: DownloadRemoteImagePathParams = field(default=None)
    query_params: DownloadRemoteImageQueryParams = field(default=None)
    security: DownloadRemoteImageSecurity = field(default=None)
    

@dataclass
class DownloadRemoteImageResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
