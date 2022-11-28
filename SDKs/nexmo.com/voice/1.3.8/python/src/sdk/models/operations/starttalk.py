from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartTalkPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartTalkSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartTalkRequest:
    path_params: StartTalkPathParams = field()
    security: StartTalkSecurity = field()
    request: Optional[shared.StartTalkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartTalkResponse:
    content_type: str = field()
    status_code: int = field()
    start_talk_response: Optional[shared.StartTalkResponse] = field(default=None)
    
