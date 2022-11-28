from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateConfigurationRequestsInput:
    server_configuration: Optional[shared.ServerConfigurationInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    server_configuration1: Optional[shared.ServerConfigurationInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_configuration2: Optional[shared.ServerConfigurationInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateConfigurationRequest:
    request: UpdateConfigurationRequestsInput = field()
    security: UpdateConfigurationSecurity = field()
    

@dataclass
class UpdateConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    
