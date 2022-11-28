from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateInitialConfigurationRequests:
    startup_configuration_dto: Optional[shared.StartupConfigurationDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    startup_configuration_dto1: Optional[shared.StartupConfigurationDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    startup_configuration_dto2: Optional[shared.StartupConfigurationDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateInitialConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateInitialConfigurationRequest:
    request: UpdateInitialConfigurationRequests = field()
    security: UpdateInitialConfigurationSecurity = field()
    

@dataclass
class UpdateInitialConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    
