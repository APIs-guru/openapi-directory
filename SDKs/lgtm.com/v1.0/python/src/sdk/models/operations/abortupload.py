from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AbortUploadPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AbortUploadSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AbortUploadRequest:
    path_params: AbortUploadPathParams = field()
    security: AbortUploadSecurity = field()
    

@dataclass
class AbortUploadResponse:
    content_type: str = field()
    status_code: int = field()
    operation: Optional[shared.Operation] = field(default=None)
    
