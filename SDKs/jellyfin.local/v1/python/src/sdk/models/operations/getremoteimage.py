from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRemoteImageQueryParams:
    image_url: str = field(metadata={'query_param': { 'field_name': 'imageUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRemoteImageRequest:
    query_params: GetRemoteImageQueryParams = field()
    

@dataclass
class GetRemoteImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_remote_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
