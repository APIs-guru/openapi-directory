from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportPlaybackProgressRequestsInput:
    playback_progress_info: Optional[shared.PlaybackProgressInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_progress_info1: Optional[shared.PlaybackProgressInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_progress_info2: Optional[shared.PlaybackProgressInfoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReportPlaybackProgressSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportPlaybackProgressRequest:
    security: ReportPlaybackProgressSecurity = field()
    request: Optional[ReportPlaybackProgressRequestsInput] = field(default=None)
    

@dataclass
class ReportPlaybackProgressResponse:
    content_type: str = field()
    status_code: int = field()
    
