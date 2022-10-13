from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class PostPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostQueryParams:
    image_refresh_mode: Optional[shared.MetadataRefreshModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'imageRefreshMode', 'style': 'form', 'explode': True }})
    metadata_refresh_mode: Optional[shared.MetadataRefreshModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'metadataRefreshMode', 'style': 'form', 'explode': True }})
    replace_all_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'replaceAllImages', 'style': 'form', 'explode': True }})
    replace_all_metadata: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'replaceAllMetadata', 'style': 'form', 'explode': True }})
    

@dataclass
class PostSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRequest:
    path_params: PostPathParams = field(default=None)
    query_params: PostQueryParams = field(default=None)
    security: PostSecurity = field(default=None)
    

@dataclass
class PostResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
