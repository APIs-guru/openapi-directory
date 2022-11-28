from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopTalkPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTalkSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StopTalkRequest:
    path_params: StopTalkPathParams = field()
    security: StopTalkSecurity = field()
    

@dataclass
class StopTalkResponse:
    content_type: str = field()
    status_code: int = field()
    stop_talk_response: Optional[shared.StopTalkResponse] = field(default=None)
    
