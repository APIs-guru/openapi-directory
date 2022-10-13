from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetConfigurationRequest:
    security: GetConfigurationSecurity = field(default=None)
    

@dataclass
class GetConfigurationResponse:
    content_type: str = field(default=None)
    server_configuration: Optional[shared.ServerConfiguration] = field(default=None)
    status_code: int = field(default=None)
    
