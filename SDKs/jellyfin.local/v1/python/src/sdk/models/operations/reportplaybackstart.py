from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportPlaybackStartRequestsInput:
    playback_start_info: Optional[shared.PlaybackStartInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    playback_start_info1: Optional[shared.PlaybackStartInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    playback_start_info2: Optional[shared.PlaybackStartInfoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ReportPlaybackStartSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportPlaybackStartRequest:
    security: ReportPlaybackStartSecurity = field()
    request: Optional[ReportPlaybackStartRequestsInput] = field(default=None)
    

@dataclass
class ReportPlaybackStartResponse:
    content_type: str = field()
    status_code: int = field()
    
