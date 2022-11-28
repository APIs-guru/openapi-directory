from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportPlaybackStoppedRequestsInput:
    playback_stop_info: Optional[shared.PlaybackStopInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_stop_info1: Optional[shared.PlaybackStopInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_stop_info2: Optional[shared.PlaybackStopInfoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReportPlaybackStoppedSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportPlaybackStoppedRequest:
    security: ReportPlaybackStoppedSecurity = field()
    request: Optional[ReportPlaybackStoppedRequestsInput] = field(default=None)
    

@dataclass
class ReportPlaybackStoppedResponse:
    content_type: str = field()
    status_code: int = field()
    
