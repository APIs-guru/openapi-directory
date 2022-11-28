from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopStreamPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopStreamSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StopStreamRequest:
    path_params: StopStreamPathParams = field()
    security: StopStreamSecurity = field()
    

@dataclass
class StopStreamResponse:
    content_type: str = field()
    status_code: int = field()
    stop_stream_response: Optional[shared.StopStreamResponse] = field(default=None)
    
