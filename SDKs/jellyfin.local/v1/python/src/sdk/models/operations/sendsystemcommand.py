from dataclasses import dataclass, field
from typing import Enum
from sdk.models import shared


@dataclass
class SendSystemCommandPathParams:
    command: shared.GeneralCommandTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendSystemCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendSystemCommandRequest:
    path_params: SendSystemCommandPathParams = field(default=None)
    security: SendSystemCommandSecurity = field(default=None)
    

@dataclass
class SendSystemCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
