from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeauthorizeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeauthorizeRequest:
    security: DeauthorizeSecurity = field(default=None)
    

@dataclass
class DeauthorizeResponse:
    content_type: str = field(default=None)
    deauthorize_200_application_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
