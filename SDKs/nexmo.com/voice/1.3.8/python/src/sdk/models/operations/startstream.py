from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StartStreamPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartStreamSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartStreamRequest:
    path_params: StartStreamPathParams = field(default=None)
    request: shared.StartStreamRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StartStreamSecurity = field(default=None)
    

@dataclass
class StartStreamResponse:
    content_type: str = field(default=None)
    start_stream_response: Optional[shared.StartStreamResponse] = field(default=None)
    status_code: int = field(default=None)
    
