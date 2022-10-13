from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateUserConfigurationPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserConfigurationRequests:
    user_configuration: Optional[shared.UserConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    user_configuration1: Optional[shared.UserConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_configuration2: Optional[shared.UserConfiguration] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateUserConfigurationSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateUserConfigurationRequest:
    path_params: UpdateUserConfigurationPathParams = field(default=None)
    request: UpdateUserConfigurationRequests = field(default=None)
    security: UpdateUserConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateUserConfigurationResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
