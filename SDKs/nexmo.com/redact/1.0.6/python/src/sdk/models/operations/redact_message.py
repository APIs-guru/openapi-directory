from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RedactMessageSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class RedactMessageRequest:
    request: shared.RedactTransaction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RedactMessageSecurity = field(default=None)
    

@dataclass
class RedactMessageResponse:
    content_type: str = field(default=None)
    error_invalid_id: Optional[shared.ErrorInvalidID] = field(default=None)
    error_throttled: Optional[shared.ErrorThrottled] = field(default=None)
    error_unauthorized: Optional[shared.ErrorUnauthorized] = field(default=None)
    status_code: int = field(default=None)
    redact_message_403_application_json_one_of: Optional[Any] = field(default=None)
    redact_message_422_application_json_one_of: Optional[Any] = field(default=None)
    
