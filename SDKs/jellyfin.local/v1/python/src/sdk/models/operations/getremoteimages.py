from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetRemoteImagesPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteImagesQueryParams:
    include_all_languages: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeAllLanguages', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    provider_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'providerName', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    type: Optional[shared.ImageTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoteImagesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteImagesRequest:
    path_params: GetRemoteImagesPathParams = field(default=None)
    query_params: GetRemoteImagesQueryParams = field(default=None)
    security: GetRemoteImagesSecurity = field(default=None)
    

@dataclass
class GetRemoteImagesResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    remote_image_result: Optional[shared.RemoteImageResult] = field(default=None)
    status_code: int = field(default=None)
    
