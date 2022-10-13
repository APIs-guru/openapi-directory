from dataclasses import dataclass, field



@dataclass
class SyncPlayUnpauseSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayUnpauseRequest:
    security: SyncPlayUnpauseSecurity = field(default=None)
    

@dataclass
class SyncPlayUnpauseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
