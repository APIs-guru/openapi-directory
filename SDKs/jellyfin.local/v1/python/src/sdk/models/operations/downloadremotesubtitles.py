from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DownloadRemoteSubtitlesPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    subtitle_id: str = field(metadata={'path_param': { 'field_name': 'subtitleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadRemoteSubtitlesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DownloadRemoteSubtitlesRequest:
    path_params: DownloadRemoteSubtitlesPathParams = field()
    security: DownloadRemoteSubtitlesSecurity = field()
    

@dataclass
class DownloadRemoteSubtitlesResponse:
    content_type: str = field()
    status_code: int = field()
    
