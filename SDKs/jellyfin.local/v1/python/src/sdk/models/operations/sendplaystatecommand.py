from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SendPlaystateCommandPathParams:
    command: shared.PlaystateCommandEnum = field(metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendPlaystateCommandQueryParams:
    controlling_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'controllingUserId', 'style': 'form', 'explode': True }})
    seek_position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'seekPositionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class SendPlaystateCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendPlaystateCommandRequest:
    path_params: SendPlaystateCommandPathParams = field()
    query_params: SendPlaystateCommandQueryParams = field()
    security: SendPlaystateCommandSecurity = field()
    

@dataclass
class SendPlaystateCommandResponse:
    content_type: str = field()
    status_code: int = field()
    
