from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AbortUploadPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AbortUploadSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class AbortUploadRequest:
    path_params: AbortUploadPathParams = field(default=None)
    security: AbortUploadSecurity = field(default=None)
    

@dataclass
class AbortUploadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    
