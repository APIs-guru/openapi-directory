from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRatingImagePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    theme: str = field(default=None, metadata={'path_param': { 'field_name': 'theme', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRatingImageRequest:
    path_params: GetRatingImagePathParams = field(default=None)
    

@dataclass
class GetRatingImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_rating_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
