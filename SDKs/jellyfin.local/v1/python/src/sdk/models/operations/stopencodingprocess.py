from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopEncodingProcessQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    

@dataclass
class StopEncodingProcessSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StopEncodingProcessRequest:
    query_params: StopEncodingProcessQueryParams = field()
    security: StopEncodingProcessSecurity = field()
    

@dataclass
class StopEncodingProcessResponse:
    content_type: str = field()
    status_code: int = field()
    
