from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteUploadPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteUploadSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CompleteUploadRequest:
    path_params: CompleteUploadPathParams = field()
    security: CompleteUploadSecurity = field()
    

@dataclass
class CompleteUploadResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
