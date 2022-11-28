from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteRecordingPathParams:
    recording_id: str = field(metadata={'path_param': { 'field_name': 'recordingId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRecordingRequest:
    path_params: DeleteRecordingPathParams = field()
    security: DeleteRecordingSecurity = field()
    

@dataclass
class DeleteRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
