from dataclasses import dataclass, field
from typing import Enum
from sdk.models import shared


@dataclass
class SendGeneralCommandPathParams:
    command: shared.GeneralCommandTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendGeneralCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendGeneralCommandRequest:
    path_params: SendGeneralCommandPathParams = field(default=None)
    security: SendGeneralCommandSecurity = field(default=None)
    

@dataclass
class SendGeneralCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
