from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartStreamPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartStreamSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartStreamRequest:
    path_params: StartStreamPathParams = field()
    request: shared.StartStreamRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: StartStreamSecurity = field()
    

@dataclass
class StartStreamResponse:
    content_type: str = field()
    status_code: int = field()
    start_stream_response: Optional[shared.StartStreamResponse] = field(default=None)
    
