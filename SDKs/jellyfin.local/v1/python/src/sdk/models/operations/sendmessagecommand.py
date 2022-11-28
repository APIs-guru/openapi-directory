from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendMessageCommandPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendMessageCommandQueryParams:
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    header: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'header', 'style': 'form', 'explode': True }})
    timeout_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeoutMs', 'style': 'form', 'explode': True }})
    

@dataclass
class SendMessageCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendMessageCommandRequest:
    path_params: SendMessageCommandPathParams = field()
    query_params: SendMessageCommandQueryParams = field()
    security: SendMessageCommandSecurity = field()
    

@dataclass
class SendMessageCommandResponse:
    content_type: str = field()
    status_code: int = field()
    
