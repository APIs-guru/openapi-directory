from dataclasses import dataclass, field
from enum import Enum
from sdk.models import shared


@dataclass
class SendGeneralCommandPathParams:
    command: shared.GeneralCommandTypeEnum = field(metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendGeneralCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendGeneralCommandRequest:
    path_params: SendGeneralCommandPathParams = field()
    security: SendGeneralCommandSecurity = field()
    

@dataclass
class SendGeneralCommandResponse:
    content_type: str = field()
    status_code: int = field()
    
