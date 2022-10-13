from dataclasses import dataclass, field



@dataclass
class DownloadRemoteSubtitlesPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    subtitle_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subtitleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadRemoteSubtitlesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DownloadRemoteSubtitlesRequest:
    path_params: DownloadRemoteSubtitlesPathParams = field(default=None)
    security: DownloadRemoteSubtitlesSecurity = field(default=None)
    

@dataclass
class DownloadRemoteSubtitlesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
