from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendFullGeneralCommandPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendFullGeneralCommandRequests:
    general_command: Optional[shared.GeneralCommand] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    general_command1: Optional[shared.GeneralCommand] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    general_command2: Optional[shared.GeneralCommand] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SendFullGeneralCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendFullGeneralCommandRequest:
    path_params: SendFullGeneralCommandPathParams = field()
    request: SendFullGeneralCommandRequests = field()
    security: SendFullGeneralCommandSecurity = field()
    

@dataclass
class SendFullGeneralCommandResponse:
    content_type: str = field()
    status_code: int = field()
    
