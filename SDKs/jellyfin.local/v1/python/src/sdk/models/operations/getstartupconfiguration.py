from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStartupConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetStartupConfigurationRequest:
    security: GetStartupConfigurationSecurity = field(default=None)
    

@dataclass
class GetStartupConfigurationResponse:
    content_type: str = field(default=None)
    startup_configuration_dto: Optional[shared.StartupConfigurationDto] = field(default=None)
    status_code: int = field(default=None)
    
