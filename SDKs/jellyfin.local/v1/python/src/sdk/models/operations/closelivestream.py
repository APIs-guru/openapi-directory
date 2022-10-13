from dataclasses import dataclass, field



@dataclass
class CloseLiveStreamQueryParams:
    live_stream_id: str = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    

@dataclass
class CloseLiveStreamSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CloseLiveStreamRequest:
    query_params: CloseLiveStreamQueryParams = field(default=None)
    security: CloseLiveStreamSecurity = field(default=None)
    

@dataclass
class CloseLiveStreamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
