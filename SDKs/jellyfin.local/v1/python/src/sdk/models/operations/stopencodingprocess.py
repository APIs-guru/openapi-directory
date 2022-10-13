from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StopEncodingProcessQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    

@dataclass
class StopEncodingProcessSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StopEncodingProcessRequest:
    query_params: StopEncodingProcessQueryParams = field(default=None)
    security: StopEncodingProcessSecurity = field(default=None)
    

@dataclass
class StopEncodingProcessResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
