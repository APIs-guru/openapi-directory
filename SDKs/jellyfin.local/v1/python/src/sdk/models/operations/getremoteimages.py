from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRemoteImagesPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteImagesQueryParams:
    include_all_languages: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeAllLanguages', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    provider_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'providerName', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    type: Optional[shared.ImageTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoteImagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteImagesRequest:
    path_params: GetRemoteImagesPathParams = field()
    query_params: GetRemoteImagesQueryParams = field()
    security: GetRemoteImagesSecurity = field()
    

@dataclass
class GetRemoteImagesResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    remote_image_result: Optional[shared.RemoteImageResult] = field(default=None)
    
