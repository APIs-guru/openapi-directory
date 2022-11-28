from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ShutdownApplicationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ShutdownApplicationRequest:
    security: ShutdownApplicationSecurity = field()
    

@dataclass
class ShutdownApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
