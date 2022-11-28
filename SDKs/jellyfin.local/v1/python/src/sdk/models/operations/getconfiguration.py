from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetConfigurationRequest:
    security: GetConfigurationSecurity = field()
    

@dataclass
class GetConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    server_configuration: Optional[shared.ServerConfiguration] = field(default=None)
    
