from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetFilePathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFileRequest:
    path_params: GetFilePathParams = field(default=None)
    security: GetFileSecurity = field(default=None)
    

@dataclass
class GetFileResponse:
    content_type: str = field(default=None)
    get_file_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_file_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
