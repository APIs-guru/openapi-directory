from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopTalkPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTalkSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StopTalkRequest:
    path_params: StopTalkPathParams = field(default=None)
    security: StopTalkSecurity = field(default=None)
    

@dataclass
class StopTalkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_talk_response: Optional[shared.StopTalkResponse] = field(default=None)
    
