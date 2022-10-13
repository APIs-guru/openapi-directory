from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendMessageCommandPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendMessageCommandQueryParams:
    header: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'header', 'style': 'form', 'explode': True }})
    text: str = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    timeout_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeoutMs', 'style': 'form', 'explode': True }})
    

@dataclass
class SendMessageCommandSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SendMessageCommandRequest:
    path_params: SendMessageCommandPathParams = field(default=None)
    query_params: SendMessageCommandQueryParams = field(default=None)
    security: SendMessageCommandSecurity = field(default=None)
    

@dataclass
class SendMessageCommandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
