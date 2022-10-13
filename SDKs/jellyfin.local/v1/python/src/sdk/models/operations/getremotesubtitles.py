from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRemoteSubtitlesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteSubtitlesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteSubtitlesRequest:
    path_params: GetRemoteSubtitlesPathParams = field(default=None)
    security: GetRemoteSubtitlesSecurity = field(default=None)
    

@dataclass
class GetRemoteSubtitlesResponse:
    content_type: str = field(default=None)
    get_remote_subtitles_200_text_wildcard_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
