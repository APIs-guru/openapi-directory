from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRecordingPathParams:
    recording_id: str = field(default=None, metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRecordingRequest:
    path_params: DeleteRecordingPathParams = field(default=None)
    security: DeleteRecordingSecurity = field(default=None)
    

@dataclass
class DeleteRecordingResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
