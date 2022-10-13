from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendFullGeneralCommandPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendFullGeneralCommandRequests:
    general_command: Optional[shared.GeneralCommand] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    general_command1: Optional[shared.GeneralCommand] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    general_command2: Optional[shared.GeneralCommand] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SendFullGeneralCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendFullGeneralCommandRequest:
    path_params: SendFullGeneralCommandPathParams = field(default=None)
    request: SendFullGeneralCommandRequests = field(default=None)
    security: SendFullGeneralCommandSecurity = field(default=None)
    

@dataclass
class SendFullGeneralCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
