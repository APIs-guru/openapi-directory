from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIconPathParams:
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIconRequest:
    path_params: GetIconPathParams = field(default=None)
    

@dataclass
class GetIconResponse:
    content_type: str = field(default=None)
    get_icon_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
