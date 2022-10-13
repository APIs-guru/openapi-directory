from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class SendPlaystateCommandPathParams:
    command: shared.PlaystateCommandEnum = field(default=None, metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendPlaystateCommandQueryParams:
    controlling_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'controllingUserId', 'style': 'form', 'explode': True }})
    seek_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'seekPositionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class SendPlaystateCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendPlaystateCommandRequest:
    path_params: SendPlaystateCommandPathParams = field(default=None)
    query_params: SendPlaystateCommandQueryParams = field(default=None)
    security: SendPlaystateCommandSecurity = field(default=None)
    

@dataclass
class SendPlaystateCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
