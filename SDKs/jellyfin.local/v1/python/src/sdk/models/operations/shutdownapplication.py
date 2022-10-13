from dataclasses import dataclass, field



@dataclass
class ShutdownApplicationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ShutdownApplicationRequest:
    security: ShutdownApplicationSecurity = field(default=None)
    

@dataclass
class ShutdownApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
