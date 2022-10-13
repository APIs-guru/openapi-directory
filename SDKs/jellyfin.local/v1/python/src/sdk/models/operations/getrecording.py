from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecordingPathParams:
    recording_id: str = field(default=None, metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecordingQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecordingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRecordingRequest:
    path_params: GetRecordingPathParams = field(default=None)
    query_params: GetRecordingQueryParams = field(default=None)
    security: GetRecordingSecurity = field(default=None)
    

@dataclass
class GetRecordingResponse:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
