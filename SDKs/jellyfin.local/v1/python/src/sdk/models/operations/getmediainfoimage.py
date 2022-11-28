from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetMediaInfoImagePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    theme: str = field(metadata={'path_param': { 'field_name': 'theme', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMediaInfoImageRequest:
    path_params: GetMediaInfoImagePathParams = field()
    

@dataclass
class GetMediaInfoImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_media_info_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
