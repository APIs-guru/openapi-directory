from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SyncPlayStopSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayStopRequest:
    security: SyncPlayStopSecurity = field()
    

@dataclass
class SyncPlayStopResponse:
    content_type: str = field()
    status_code: int = field()
    
