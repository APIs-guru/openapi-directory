from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportPlaybackStartRequests:
    playback_start_info: Optional[shared.PlaybackStartInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_start_info1: Optional[shared.PlaybackStartInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_start_info2: Optional[shared.PlaybackStartInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReportPlaybackStartSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportPlaybackStartRequest:
    request: Optional[ReportPlaybackStartRequests] = field(default=None)
    security: ReportPlaybackStartSecurity = field(default=None)
    

@dataclass
class ReportPlaybackStartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
