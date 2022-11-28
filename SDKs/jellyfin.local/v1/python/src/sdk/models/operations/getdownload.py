from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDownloadPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDownloadSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDownloadRequest:
    path_params: GetDownloadPathParams = field()
    security: GetDownloadSecurity = field()
    

@dataclass
class GetDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    get_download_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_download_200_video_wildcard_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
