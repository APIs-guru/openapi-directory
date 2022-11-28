from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConfigurationSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetConfigurationRequest:
    security: GetConfigurationSecurity = field()
    

@dataclass
class GetConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
