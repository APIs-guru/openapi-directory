from dataclasses import dataclass, field



@dataclass
class SyncPlayPauseSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayPauseRequest:
    security: SyncPlayPauseSecurity = field(default=None)
    

@dataclass
class SyncPlayPauseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
