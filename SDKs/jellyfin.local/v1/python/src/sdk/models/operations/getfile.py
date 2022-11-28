from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetFilePathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFileRequest:
    path_params: GetFilePathParams = field()
    security: GetFileSecurity = field()
    

@dataclass
class GetFileResponse:
    content_type: str = field()
    status_code: int = field()
    get_file_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_file_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
