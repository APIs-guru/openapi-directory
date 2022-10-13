from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateInitialConfigurationRequests:
    startup_configuration_dto: Optional[shared.StartupConfigurationDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    startup_configuration_dto1: Optional[shared.StartupConfigurationDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    startup_configuration_dto2: Optional[shared.StartupConfigurationDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateInitialConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateInitialConfigurationRequest:
    request: UpdateInitialConfigurationRequests = field(default=None)
    security: UpdateInitialConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateInitialConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
