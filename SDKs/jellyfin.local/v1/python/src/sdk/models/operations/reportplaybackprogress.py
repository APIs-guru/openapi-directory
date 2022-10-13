from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportPlaybackProgressRequests:
    playback_progress_info: Optional[shared.PlaybackProgressInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_progress_info1: Optional[shared.PlaybackProgressInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_progress_info2: Optional[shared.PlaybackProgressInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReportPlaybackProgressSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportPlaybackProgressRequest:
    request: Optional[ReportPlaybackProgressRequests] = field(default=None)
    security: ReportPlaybackProgressSecurity = field(default=None)
    

@dataclass
class ReportPlaybackProgressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
