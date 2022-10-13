from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportPlaybackStoppedRequests:
    playback_stop_info: Optional[shared.PlaybackStopInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_stop_info1: Optional[shared.PlaybackStopInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_stop_info2: Optional[shared.PlaybackStopInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReportPlaybackStoppedSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportPlaybackStoppedRequest:
    request: Optional[ReportPlaybackStoppedRequests] = field(default=None)
    security: ReportPlaybackStoppedSecurity = field(default=None)
    

@dataclass
class ReportPlaybackStoppedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
