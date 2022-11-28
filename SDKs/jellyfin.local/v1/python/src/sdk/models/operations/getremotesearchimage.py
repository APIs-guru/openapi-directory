from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRemoteSearchImageQueryParams:
    image_url: str = field(metadata={'query_param': { 'field_name': 'imageUrl', 'style': 'form', 'explode': True }})
    provider_name: str = field(metadata={'query_param': { 'field_name': 'providerName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoteSearchImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteSearchImageRequest:
    query_params: GetRemoteSearchImageQueryParams = field()
    security: GetRemoteSearchImageSecurity = field()
    

@dataclass
class GetRemoteSearchImageResponse:
    content_type: str = field()
    status_code: int = field()
    get_remote_search_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    
