from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsOptionsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetEventsOptionsRequest:
    security: GetEventsOptionsSecurity = field(default=None)
    

@dataclass
class GetEventsOptionsResponse:
    audit_event_types_resp: Optional[shared.AuditEventTypesResp] = field(default=None)
    content_type: str = field(default=None)
    error_forbidden: Optional[shared.ErrorForbidden] = field(default=None)
    error_unauthorized: Optional[shared.ErrorUnauthorized] = field(default=None)
    no_content: Optional[shared.NoContent] = field(default=None)
    status_code: int = field(default=None)
    
