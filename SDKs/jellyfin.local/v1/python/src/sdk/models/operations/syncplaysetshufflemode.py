from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlaySetShuffleModeRequests:
    set_shuffle_mode_request_dto: Optional[shared.SetShuffleModeRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    set_shuffle_mode_request_dto1: Optional[shared.SetShuffleModeRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    set_shuffle_mode_request_dto2: Optional[shared.SetShuffleModeRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlaySetShuffleModeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetShuffleModeRequest:
    request: SyncPlaySetShuffleModeRequests = field(default=None)
    security: SyncPlaySetShuffleModeSecurity = field(default=None)
    

@dataclass
class SyncPlaySetShuffleModeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
