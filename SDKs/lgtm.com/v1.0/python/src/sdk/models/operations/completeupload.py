from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteUploadPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompleteUploadSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CompleteUploadRequest:
    path_params: CompleteUploadPathParams = field(default=None)
    security: CompleteUploadSecurity = field(default=None)
    

@dataclass
class CompleteUploadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    
