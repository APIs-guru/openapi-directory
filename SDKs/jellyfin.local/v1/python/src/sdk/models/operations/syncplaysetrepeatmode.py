from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlaySetRepeatModeRequests:
    set_repeat_mode_request_dto: Optional[shared.SetRepeatModeRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    set_repeat_mode_request_dto1: Optional[shared.SetRepeatModeRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    set_repeat_mode_request_dto2: Optional[shared.SetRepeatModeRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlaySetRepeatModeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetRepeatModeRequest:
    request: SyncPlaySetRepeatModeRequests = field()
    security: SyncPlaySetRepeatModeSecurity = field()
    

@dataclass
class SyncPlaySetRepeatModeResponse:
    content_type: str = field()
    status_code: int = field()
    
