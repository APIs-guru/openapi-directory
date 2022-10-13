from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateConfigurationRequests:
    server_configuration: Optional[shared.ServerConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    server_configuration1: Optional[shared.ServerConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_configuration2: Optional[shared.ServerConfiguration] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateConfigurationRequest:
    request: UpdateConfigurationRequests = field(default=None)
    security: UpdateConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
