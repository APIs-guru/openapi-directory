from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DownloadRemoteImagePathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadRemoteImageQueryParams:
    type: shared.ImageTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    image_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'imageUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadRemoteImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DownloadRemoteImageRequest:
    path_params: DownloadRemoteImagePathParams = field()
    query_params: DownloadRemoteImageQueryParams = field()
    security: DownloadRemoteImageSecurity = field()
    

@dataclass
class DownloadRemoteImageResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
