from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIconIDPathParams:
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serverId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIconIDRequest:
    path_params: GetIconIDPathParams = field(default=None)
    

@dataclass
class GetIconIDResponse:
    content_type: str = field(default=None)
    get_icon_id_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
