from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SyncPlayPauseSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayPauseRequest:
    security: SyncPlayPauseSecurity = field()
    

@dataclass
class SyncPlayPauseResponse:
    content_type: str = field()
    status_code: int = field()
    
