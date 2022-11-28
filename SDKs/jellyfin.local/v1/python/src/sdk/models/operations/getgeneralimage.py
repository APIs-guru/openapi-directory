from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetGeneralImagePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneralImageRequest:
    path_params: GetGeneralImagePathParams = field()
    

@dataclass
class GetGeneralImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_general_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
