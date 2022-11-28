from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRemoteSubtitlesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteSubtitlesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteSubtitlesRequest:
    path_params: GetRemoteSubtitlesPathParams = field()
    security: GetRemoteSubtitlesSecurity = field()
    

@dataclass
class GetRemoteSubtitlesResponse:
    content_type: str = field()
    status_code: int = field()
    get_remote_subtitles_200_text_wildcard_binary_string: Optional[bytes] = field(default=None)
    
