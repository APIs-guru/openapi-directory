from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SyncPlayUnpauseSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayUnpauseRequest:
    security: SyncPlayUnpauseSecurity = field()
    

@dataclass
class SyncPlayUnpauseResponse:
    content_type: str = field()
    status_code: int = field()
    
