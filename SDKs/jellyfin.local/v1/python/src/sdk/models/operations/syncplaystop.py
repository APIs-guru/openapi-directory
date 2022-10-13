from dataclasses import dataclass, field



@dataclass
class SyncPlayStopSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayStopRequest:
    security: SyncPlayStopSecurity = field(default=None)
    

@dataclass
class SyncPlayStopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
