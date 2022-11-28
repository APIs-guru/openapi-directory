from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CloseLiveStreamQueryParams:
    live_stream_id: str = field(metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    

@dataclass
class CloseLiveStreamSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CloseLiveStreamRequest:
    query_params: CloseLiveStreamQueryParams = field()
    security: CloseLiveStreamSecurity = field()
    

@dataclass
class CloseLiveStreamResponse:
    content_type: str = field()
    status_code: int = field()
    
