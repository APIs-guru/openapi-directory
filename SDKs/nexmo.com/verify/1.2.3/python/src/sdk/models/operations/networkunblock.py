from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class NetworkUnblockRequest:
    request: shared.NetworkUnblock = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NetworkUnblockResponse:
    content_type: str = field(default=None)
    error_throttled: Optional[shared.ErrorThrottled] = field(default=None)
    status_code: int = field(default=None)
    network_unblock_response_forbidden: Optional[shared.NetworkUnblockResponseForbidden] = field(default=None)
    network_unblock_response_not_found: Optional[shared.NetworkUnblockResponseNotFound] = field(default=None)
    network_unblock_response_ok: Optional[shared.NetworkUnblockResponseOk] = field(default=None)
    network_unblock_422_application_json_one_of: Optional[Any] = field(default=None)
    
