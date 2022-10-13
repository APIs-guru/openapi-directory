from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRemoteSearchImageQueryParams:
    image_url: str = field(default=None, metadata={'query_param': { 'field_name': 'imageUrl', 'style': 'form', 'explode': True }})
    provider_name: str = field(default=None, metadata={'query_param': { 'field_name': 'providerName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoteSearchImageSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteSearchImageRequest:
    query_params: GetRemoteSearchImageQueryParams = field(default=None)
    security: GetRemoteSearchImageSecurity = field(default=None)
    

@dataclass
class GetRemoteSearchImageResponse:
    content_type: str = field(default=None)
    get_remote_search_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
