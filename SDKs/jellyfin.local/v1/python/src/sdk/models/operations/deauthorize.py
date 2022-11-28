from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeauthorizeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeauthorizeRequest:
    security: DeauthorizeSecurity = field()
    

@dataclass
class DeauthorizeResponse:
    content_type: str = field()
    status_code: int = field()
    deauthorize_200_application_json_int32_integer: Optional[int] = field(default=None)
    
