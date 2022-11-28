from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIconPathParams:
    file_name: str = field(metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIconRequest:
    path_params: GetIconPathParams = field()
    

@dataclass
class GetIconResponse:
    content_type: str = field()
    status_code: int = field()
    get_icon_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
