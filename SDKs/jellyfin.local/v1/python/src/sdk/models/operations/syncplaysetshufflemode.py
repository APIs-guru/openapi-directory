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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetShuffleModeRequest:
    request: SyncPlaySetShuffleModeRequests = field()
    security: SyncPlaySetShuffleModeSecurity = field()
    

@dataclass
class SyncPlaySetShuffleModeResponse:
    content_type: str = field()
    status_code: int = field()
    
