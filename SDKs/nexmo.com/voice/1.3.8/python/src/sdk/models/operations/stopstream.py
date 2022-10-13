from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopStreamPathParams:
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopStreamSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StopStreamRequest:
    path_params: StopStreamPathParams = field(default=None)
    security: StopStreamSecurity = field(default=None)
    

@dataclass
class StopStreamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_stream_response: Optional[shared.StopStreamResponse] = field(default=None)
    
