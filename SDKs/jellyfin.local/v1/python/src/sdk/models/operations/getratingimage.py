from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRatingImagePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    theme: str = field(metadata={'path_param': { 'field_name': 'theme', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRatingImageRequest:
    path_params: GetRatingImagePathParams = field()
    

@dataclass
class GetRatingImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_rating_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
