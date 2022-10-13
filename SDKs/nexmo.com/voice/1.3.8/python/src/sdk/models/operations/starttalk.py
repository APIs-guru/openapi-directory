from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartTalkPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartTalkSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartTalkRequest:
    path_params: StartTalkPathParams = field(default=None)
    request: Optional[shared.StartTalkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StartTalkSecurity = field(default=None)
    

@dataclass
class StartTalkResponse:
    content_type: str = field(default=None)
    start_talk_response: Optional[shared.StartTalkResponse] = field(default=None)
    status_code: int = field(default=None)
    
