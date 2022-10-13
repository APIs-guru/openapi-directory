from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetGeneralImagePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneralImageRequest:
    path_params: GetGeneralImagePathParams = field(default=None)
    

@dataclass
class GetGeneralImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_general_image_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
